import {getDocumentsFromNode} from '@/plugins/tmdNode';

export const state = () => ({
  items: [],
});

export const getters = {
  documents:state=>state.items
};

export const mutations = {
  update:(s,i)=>s.items=i
};

export const actions = {
  async update({
    commit,
    state
  }, node) {
    commit('update', await getDocumentsFromNode(node));
  }
};

