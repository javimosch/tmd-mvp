import {
	fetch,
	update
} from '@/plugins/configApi'
import _ from 'lodash';

export const state = () => ({
	mappings: [],
	databases:[],
	databasesSelection:[] 
});

export const mutations = {
	setConfig(state, config) {
		Object.assign(state, Object.assign(config, {
			mappings: config.mappings || []
		}));
	},
	updateMapping(state, record) {
		if(!record.newName) record.newName = record.name;
		for (var x = 0; x < state.mappings.length; x++) {
			if (state.mappings[x].name === record.newName) {
				state.mappings[x].name = record.name;
				if(record.columns){
					state.mappings[x].columns = record.columns;
				}
				return;
			}
		}
		delete record.newName;
		if(!record.name) throw new Error('Mapping record name required');
		state.mappings.push(record);
	},
	removeMappingFromList(state, name) {
		for (var x = 0; x < state.mappings.length; x++) {
			if (state.mappings[x].name === name) {
				state.mappings.splice(x, 1);
			}
		}
	},
	removeMappingColumn(state, {mappingName, columnName}){
		let m = findByName(state.mappings, mappingName);
		if (!m) throw new Error('mappingName mistmatch');
		let index = getIndexByName(m.columns, columnName);
		if(index){
			m.columns.splice(index, 1);
		}
	},
	saveMappingColumn(state, {
		mappingName,
		column
	}) {
		let m = findByName(state.mappings, mappingName);
		if (!m) throw new Error('mappingName mistmatch');
		let c = findByName(m.columns, column.originalName);
		if (c) {
			delete column.originalName;
			c.name = column.name;
			c.data = column.data;
		} else {
			m.columns.push({
				name: column.name,
				data: column.data
			});
		}
	},
	setDatabasesSelection(state, v){
		if(!v){
			state.databasesSelection = state.databases;
		}else{
			state.databasesSelection = state.databases.filter(d=> d.name.indexOf(v)!==-1||d.type.indexOf(v)!==-1)
		}
	}
};

export const actions = {
	async fetch({
		commit
	}) {
		commit('setConfig', await fetch());
	},
	async save({
		commit,
		state
	}) {
		return await update(_.clone({
			name:state.name,
			mappings:state.mappings,
			databases:state.databases
		},true));
	},
	
	async saveMapping({
		commit,
		dispatch
	}, mapping) {
		commit('updateMapping', mapping);
		return await dispatch('save');
	},
	async removeMapping({
		commit,
		dispatch,
		state
	}, name) {
		commit('removeMappingFromList', name);
		//return await dispatch('save');
	},
	async hasMapping(store, name) {
		return findByName(store.state.mappings, name) != null;
	},
	async saveMappingColumn(store, data) {
		store.commit('saveMappingColumn', data)
		//return await store.dispatch('save');
	},
	async removeMappingColumn(store, data) {
		store.commit('removeMappingColumn', data)
		//return await store.dispatch('save');
	},
	async searchDatabases(store, opts){
		store.commit('setDatabasesSelection', opts.value);
	}
};

export const getters = {
  getMapping(state) {
    return (n)=>findByName(state.mappings,n)
  },
}

function findByName(arr, name) {
	for (var x = 0; x < arr.length; x++) {
		if (arr[x].name === name) {
			return arr[x]
		}
	}
	return null;
}
function getIndexByName(arr, name) {
	for (var x = 0; x < arr.length; x++) {
		if (arr[x].name === name) {
			return x;
		}
	}
	return null;
}