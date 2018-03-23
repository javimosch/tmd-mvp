import localforage from 'localforage';
import _ from 'lodash';
import moment from 'moment';

export const state = () => ({
  messages: []
});

export const mutations = {
  addMessage:(state,{text, from, ...params})=>state.messages.push({
    text,
    from,
    isUser: params.isUser === true,
    at: moment()._d.toISOString()
  })
};

export const actions = {
  async addMessage({
    commit,
    state,
    dispatch
  }, params) {
    commit('addMessage', params);
    dispatch('tmdOrder/updateMessages', state.messages,{root:true});
  }
};