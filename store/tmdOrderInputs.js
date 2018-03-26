import {getInputsFromNode} from '@/plugins/tmdNode';
import {saveToCache} from '@/plugins/tmdOrder';

export const state = () => ({
  items: [],
});

export const mutations = {
  update:(s,i)=>s.items=i,
  updateInput(state, params){
    state.items.forEach(input=>{
      if(input.code.toString()==params.code.toString()){
        for(var x in params){
          input[x] = params[x];
        }
      }
    });
  }
};

export const actions = {
  async update({
    commit,
    state,
    dispatch
  }, node) {
    commit('update', await getInputsFromNode(node));

    if(state.items.length>0){
      let first = state.items[0];
      console.log('tmdOrderInputs update ',first);
      if(!first.rendered){
        first.rendered = true;
      }
      await dispatch('tmdOrderMessages/add',{
          text:first.message,
          from:'Bot'
        },{root:true});
    }

    await saveToCache({
      inputs: state.items
    });

  },
  async resolve({
    commit
  }, {
    input,
    answer
  }) {
    commit('updateInput', {
      code:input.code,
      answer: answer
    });
  }
};

