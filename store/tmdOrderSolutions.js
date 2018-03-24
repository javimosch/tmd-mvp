import routesJson from '@/assets/routes.json';
import _ from 'lodash';

export const state = () => ({
  items: [],
});

export const getters = {
  solutions:state=>state.items
};

export const mutations = {
  updateAll(state, items) {
    state.items = items;
  }
};

export const actions = {
  async updateAll({
    commit,
    state
  }, node) {
    commit('updateAll', await getSolutionsFromNode(node));
  }
};

async function getSolutionsFromNode(node){
  if(node.solutions){
    return node.solutions;
  }else{
    let arr = node.relationships.has_solution;
    return routesJson.solutions.filter(item => _.includes(arr, item.code));
  }
}

async function fetchAll(){
  let items = await localforage.getItem('tmdOrderSolutions');
  return items;
}
