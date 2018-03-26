import {fetchAll} from '@/plugins/tmdOrders';

export const state = () => ({
  items: [],
});

export const getters = {
  getAll:state=>state.items
};

export const mutations = {
  sync(state, items) {
    state.items = items;
  }
};

export const actions = {
  async sync({
    commit,
    state
  }, node) {
    commit('sync', await fetchAll());
  }
};

