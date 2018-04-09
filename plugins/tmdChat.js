import {
	call
} from '@/plugins/rpcApi';
import _ from 'lodash';

var scope = {
	processing:false
};

if (typeof window !== 'undefined' && !process.env.isProduction) {
	window.chat = scope;
}

export default {
	start: start,
	isProcessing:()=>scope.processing
};

function get(name) {
	return scope.store.state.tmdChat[name];
}

async function computeNextAction() {
	try {
		await ensureValidState();

		//Decide state
		let m = get('messages');
		let lastMessage = m.length > 0 ? m[m.length - 1] : null;

		if (lastMessage) {
			if (!lastMessage.isUser && get('state') !== 'waiting') {
				commit('state', 'waiting');
			}
		}

		//bot writes a message (field request)
		if (get('state') === 'writing') {
			let messagePayload = getNextMessagePayload();
			if (messagePayload.message) {
				if (lastMessage && lastMessage.message == messagePayload.message) {
					throw new Error('Message duplication!');
				}
				let doc = await saveChatMessage(messagePayload.message, false,messagePayload.field);
				commit('lastBotMessage',doc);
				commit('state','waiting');
			}
		}


		//do nothing (waiting for user)

		setTimeout(computeNextAction, 1000);
	} catch (err) {
		console.error('Chat crash', err);
	}
}

function ensureValidState() {
	if (get('state') === 'off') throw new Error('Invalid state off (call start first)');
	if (!get('settings')) throw new Error('Invalid settings');
	if (!get('orders')) throw new Error('Invalid orders');
	if (!get('messages')) throw new Error('Invalid messages');
	if (!get('inputs')) throw new Error('Invalid inputs');
	if (!get('user')) throw new Error('Invalid user');
	if (!get('pendingFields')) throw new Error('Invalid pendingFields');

}

function getNextMessagePayload() {
	if (get('pendingFields').length > 0) {
		let field = get('pendingFields')[0];
		let msg = 'I request ' + field.name;

		let m = get('messages');
		let lastMessage = m.length > 0 ? m[m.length - 1] : null;
		if (lastMessage && lastMessage.message == msg) {
			return {
				message:''
			};
		} else {
			return {
				message:msg,
				field
			};
		}
	}
}

function getPendingFields() {
	if (!get('settings')) throw new Error('Invalid settings');
	let res = [];
	let settings = get('settings');
	for (var x in settings.fieldGroups) {
		res = res.concat(_.clone(settings.fieldGroups[x].fields));
	}
	return res.filter(pf => {
		return get('inputs').filter(i => i.field._id == pf._id).length == 0;
	});
}

async function saveFieldResponse(field, value) {
	if (get('state') !== 'waiting') throw new Error('saveChatMessage: state waiting expected');
	let doc = await call('saveFieldResponse', {
		user: get('user'),
		field: field,
		value: value
	});
	commitPush('inputs', doc);
	await saveChatMessage(value, true, field);

}

async function saveChatMessage(message, isUser, field) {
	if (!['writing', 'waiting'].includes(get('state'))) {
		throw new Error('saveChatMessage: state in writing,waiting expected');
	}
	let doc = await call('saveChatMessage', {
		user: get('user'),
		message,
		field,
		isUser: isUser || false
	});
	if(doc){
		commitPush('messages', doc);
	}
}


async function start(userId, store) {
	if(scope.processing) return;
	scope.processing = true;
	if (typeof window === 'undefined') return;
	if (!userId) throw new Error('user required');
	if (!store) throw new Error('store required');
	scope.store = store;

	commit('state', 'loading');

	commit('user', userId, null);

	//Fetch order drafts
	let orders = await call('fetchOrdersFromUser', {
		_id: userId,
		//state: ['draft']
	});
	commit('orders', orders, []);

	//Fetch chat history
	let doc = (await call('findOne', {
		model: 'user',
		_id: userId,
		populate: [
		{
			path:'chatMessages',
			populate:{
				path:'field'
			}
		}, {
			path: 'inputs',
			populate: {
				path: 'field'
			}
		}]
		//select: 'chatMessages'
	}));
	commit('messages', doc.chatMessages, [])
	commit('inputs', doc.inputs, [])
	//Fetch chat settings
	let settings = await call('findOne', {
		model: 'setting',
		populate: {
			path: 'fieldGroups',
			populate: {
				path: 'fields'
			}
		},
		query: {
			name: 'default'
		}
	});
	commit('settings', settings);
	commit('pendingFields', getPendingFields());
	commit('state', 'writing');
	await computeNextAction();
	scope.processing=false;
}

function commit(name, value, defaultValue) {
	if (!!value && typeof value === 'object') value = _.clone(value);
	//scope[name] = value || defaultValue;
	scope.store.commit('tmdChat/set', {
		[name]: value || defaultValue
	});
}

function commitPush(prop, value, defaultValue) {
	if (!!value && typeof value === 'object') value = _.clone(value);
	//scope[prop] = scope[prop] || [];
	//scope[prop].push(value||defaultValue)

	scope.store.commit('tmdChat/push', {
		prop,
		value: value || defaultValue
	});
}