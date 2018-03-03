import {remoteSelectFetch} from '@/plugins/product';

export const state = () => ({
  searchSelection:[]
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
  }
};

