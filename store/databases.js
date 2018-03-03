import {fetchAll, save, fetch, remove} from '@/plugins/database';

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
  },
  updateListItem(state,item){
    state.items.forEach(i=>{
      if(i._id.toString() == item._id){
        Object.assign(i, item);
      }
    })
  },
  removeListItem(state,id){
    let rta = null;
    state.items.forEach((i,k)=>{
      if(i._id.toString() == id.toString()){
        rta = k;
      }
    });
    if(rta!==null){
      state.items.splice(rta,1);
    }
  }
};

export const actions = {
  async update ({commit}) {
  	commit('setItem',getDraft());
    commit('set', await fetchAll());
  },
  async fetch ({commit}, id) {
  	if(!id) return;
    let doc = await fetch(id);
    commit('setItem', doc);
  },
  async draft({commit}, data){
  	if(typeof window.localStorage !== 'undefined'){
  		localStorage.setItem('databases_item_draft', JSON.stringify(data));
  	}
  },
  async save({commit}, data){
    let doc = await save(data);
    commit('updateListItem',doc);
    return doc;
  },
  async delete({commit}, id){
    await remove(id);
    commit('removeListItem',id);
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


