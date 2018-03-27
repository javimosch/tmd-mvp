import {
  generateNumber,
  saveToCache,
  loadFromCache
} from '@/plugins/tmdOrder';
import {
  isServer
} from '@/plugins/browser';
const sequential = require('promise-sequential');

let isFirst = true;

export const state = () => ({
  number: null,
  currentNode: null
});

export const mutations = {
  setCurrentNode(state, node) {
    state.currentNode = node;
  },
  sync(state, item) {
    state.number = item.number || null;
    state.currentNode = item.currentNode || null;
  }
};

export const actions = {

  async create({
    commit,
    state,
    dispatch
  }, node) {

    let item = {
      number: generateNumber(),
      currentNode: node
    };
    commit('sync', item);

    await saveToCache(item);

  },
  async addMessagesFromNode({
    state,
    dispatch,
    rootGetters
  }, node) {
    console.log('tmdOrder addMessagesFromNode',node);
    let seq = node.messages.map(message => {
      return ()=>dispatch('tmdOrderMessages/add', {
        from: "Bot",
        text: message,
      }, {
        root: true
      });
    });

    if(!isFirst){
      seq.unshift(()=>dispatch('tmdOrderMessages/add', {
        from: "You",
        text: node.title,
        isUser:true
      }, {
        root: true
      }))
    }

    await sequential(seq);
  },
  async setCurrentNode({
    state,
    commit,
    dispatch
  }, node) {

    if(!node) throw new Error('setCurrentNode: node cannot be null');

    if (!state.currentNode) {
      
      await dispatch('create', node);
    } else {
      await saveToCache({
        number: state.number,
        currentNode: node
      });
    }

    commit('setCurrentNode', node);
    await dispatch('addMessagesFromNode', node);


    if (!isServer()) {
      await dispatch('tmdOrderDocuments/update', node, {
        root: true
      });
      await dispatch('tmdOrderSolutions/update', node, {
        root: true
      });
      await dispatch('tmdOrderInputs/update', node, {
        root: true
      });
      await dispatch('tmdOrderChatOptions/update', state.currentNode, {
        root: true
      });
    }

    isFirst = false;

  },

  async sync({
    commit,
    state,
    dispatch
  }, node) {
    commit('sync', await loadFromCache() || {});
    
    if (!isServer() && state.number) {
      await dispatch('tmdOrderMessages/sync', state.number, {
        root: true
      });
    }
    await dispatch('setCurrentNode', node);
  }
};