import {fetchAll, save, fetch} from '@/plugins/database';

export const state = () => ({
  items: [],
  item:null
});

export const mutations = {
  set (state, items) {
    state.items = items;
  },
  setItem (state, item) {
    state.item = item;
  }
};

export const actions = {
  async update ({commit}) {
  	commit('setItem',getDraft());
    commit('set', await fetchAll());
  },
  async fetch ({commit}, id) {
  	if(!id) return;
    commit('setItem', await fetch(id));
  },
  async draft({commit}, data){
  	if(typeof window.localStorage !== 'undefined'){
  		localStorage.setItem('databases_item_draft', JSON.stringify(data));
  	}
  },
  async save({commit}, data){
    return await save(data);
  }
};


function getDraft(){
	if(typeof window.localStorage !== 'undefined'){
  		let d = localStorage.getItem('databases_item_draft')||null
  		if(d){
  			try{
  				return JSON.parse(d)
  			}catch(err){
  				console.warn('Unable to parse draft from cache');
  				return null;
  			}
  		}else{
  			return null;
  		}
  	}
}


