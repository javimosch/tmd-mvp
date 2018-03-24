import routesJson from '@/assets/routes.json';
import _ from 'lodash';

export const state = () => ({
  items: [],
});

export const getters = {
  documents:state=>state.items
};

export const mutations = {
  updateAll(state, items) {
    state.items = items;
  },
  sync:(s,i)=>s.items=i
};

export const actions = {
  async updateAll({
    commit,
    state
  }, node) {
    commit('updateAll', await getDocumentsFromNode(node));
  }
};

async function getDocumentsFromNode(node){
  if(node.documents){
    return node.documents;
  }else{
    let arr = node.relationships.has_document;
    return routesJson.documents.filter(item => _.includes(arr, item.code));
  }
}

async function fetchAll(){
  let items = await localforage.getItem('tmdOrderDocuments');
  return items;
}