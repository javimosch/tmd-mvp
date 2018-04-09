export const state = () => ({
	lastBotMessage:null,
	pendingFields: [],
	settings: null,
	inputs: [],
	orders: [],
	messages: [],
	user: null,
	state: 'off' //off loading writing waiting
});


export const mutations = {
	set: (s, params) => {
		for (var x in params) {
			s[x] = params[x];
		}
	},
	push:(s,{prop,value})=>{
		s[prop].push(value);
	}
};

export const actions = {};