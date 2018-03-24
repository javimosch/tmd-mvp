import routesJson from '@/assets/routes.json';
import _ from 'lodash';

export const state = () => ({
  items: [],
});

export const getters = {
  getAll:state=>state.items,
  getResolved:state=>state.items.filter(i=>i.resolved),
  getFirstUnResolvedInput:state=>{
    let r = state.items.filter(i=>!i.resolved);
    return r.lengh>0&&r[0]||null;
  }
};

export const mutations = {
  updateAll(state, items) {
    state.items = items;
  },
  sync:(s,i)=>s.items=i,
  updateInput(state, input){
    state.inputs.forEach(input=>{
      if(input.code.toString()==input.code.toString()){
        input.answer = input.answer;
        input.resolved = input.resolved;
      }
    });
  }
};

export const actions = {
  async updateAll({
    commit,
    state
  }, node) {
    commit('updateAll', await getInputsFromNode(node));
  },
  async resolve({
    commit
  }, {
    input,
    answer
  }) {
    input = _.cloneDeep(input);
    input.answer = answer;
    input.resolved = true;
    commit('updateInput', input);
  }
};

async function getInputsFromNode(currentNode){
  if(currentNode.inputs){
    return currentNode.inputs;
  }else{
    let arr = currentNode.relationships.require_input || currentNode.relationships.has_input;
    return routesJson.inputs.filter(item => _.includes(arr, item.code));
  }
}

async function fetchAll(){
  let items = await localforage.getItem('tmdOrderInputs');
  return items;
}