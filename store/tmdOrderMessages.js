import localforage from '@/plugins/localforage';
import _ from 'lodash';

export const state = () => ({
  items: [],
});

export const getters = {
  getAll:state=>state.items
};

export const mutations = {
  add:(state,{text, from, ...params})=>state.items.push({
    text,
    from,
    isUser: params.isUser === true,
    at: moment()._d.toISOString()
  }),
  sync:(s,i)=>s.items=i
};

export const actions = {
  async add({
    commit,
    state
  }, params) {
    commit('add', params);
  },
  async sync({
    commit,
    state
  }) {
    commit('sync', await fetchAll());
  }
};

async function fetchAll(){
  if(process.env.server){
    return [];
  }
  let items = await localforage.getItem('tmdOrderMessages');
  return items;
}


