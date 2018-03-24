import routesJson from '@/assets/routes.json';
import _ from 'lodash';

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

async function fetchAll(node){
  if(process.env.server){
    return [];
  }
  let items = await localforage.getItem('orders');
  return items;
}
