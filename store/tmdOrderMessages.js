import {fetchOrderMessages} from '@/plugins/tmdOrder';
import moment from 'moment';
import {saveToCache} from '@/plugins/tmdOrder';

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
  removeLast(state){
    state.items.pop();
  },
  sync:(s,i)=>s.items=i
};

export const actions = {
  async add({
    commit,
    state
  }, params) {
    commit('add', {
      from:'Bot',
      text:'...'
    });
    await wait(1);
    commit('removeLast');
    commit('add', params);
    console.log('tmdOrderMessages add',params)
    await saveToCache({
      messages: state.items
    });
  },
  async sync({
    commit,
    state
  }, orderNumber) {
    commit('sync', await fetchOrderMessages(orderNumber));
  }
};

function wait(seconds){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, seconds*1000);
  });
}
