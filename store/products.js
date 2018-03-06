import {remoteSelectFetch, countExportQuery, fetchMappedProducts, runMappingScript} from '@/plugins/product';

export const state = () => ({
  searchSelection:[],
  mappedProducts: []
});

export const mutations = {
  setSearchSelection (state, items) {
    state.searchSelection = items;
  },
};

export const actions = {
  async remoteSelectFetch ({commit}, opts) {
    let docs = await remoteSelectFetch(opts);
    commit('setSearchSelection', docs);
  },
  async countExportQuery(store, data){
  	return await countExportQuery(data);
  },
  async fetchMappedList(store, mappingId){
    return await fetchMappedProducts(mappingId);
  },
  async runMappingScript(store, opts){
    return await runMappingScript(opts);
  }
};

