import localforage from '@/plugins/localforage';
import routesJson from '@/assets/routes.json';
import _ from 'lodash';
import shortid from 'shortid';

function isServer() {
  return typeof window === 'undefined';
}

export const state = () => ({
  number: null,
  currentNode: null
});

export const mutations = {
  setCurrentNode(state, node) {
    state.currentNode(node);
  },
  sync(state, item) {
    state.number = item.number || null;
    state.currentNode = item.currentNode || null;
  }
};

export const getters = {
  getCurrentNode: state => state.currentNode,
  getNumber: state => state.number,
  getChatOptionNodes: state => {
    return [];
  }
};

export const actions = {

  async create({
    commit,
    state,
    dispatch
  }, node) {

    let item = {
      number: shortid.generate(),
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
    node.messages.forEach(message => {
      dispatch('tmdOrderMessage/add', {
        from: "Bot",
        text: message
      }, {
        root: true
      });
    });
  },
  async setCurrentNode({
    state,
    commit,
    dispatch
  }, node) {


    if (!state.currentNode) {
      //await dispatch('sync');
      //if (!state.currentNode) {
        await dispatch('create', node);
      //}
    }

    await dispatch('addMessagesFromNode', node);

    commit('setCurrentNode', node);

    await dispatch('tmdOrderInputs/updateAll', node, {
      root: true
    });
    await dispatch('tmdOrderSolutions/updateAll', node, {
      root: true
    });
    await dispatch('tmdOrderDocuments/updateAll', node, {
      root: true
    });
  },

  async sync({
    commit,
    state,
    dispatch
  }, node) {

    commit('sync', await loadFromCache() || {});

    if (!isServer()) {
      await dispatch('tmdOrderMessages/sync', {
        root: true
      });
      await dispatch('tmdOrderDocuments/sync', {
        root: true
      });
      await dispatch('tmdOrderSolutions/sync', {
        root: true
      });
      await dispatch('tmdOrderInputs/sync', {
        root: true
      });
    }

    await dispatch('setCurrentNode', node);

  }
};

async function saveToCache(item) {
  if (!isServer()) {
    await localforage.setItem('tmdOrder', item);
  }
}

async function loadFromCache() {
  if (!isServer()) {
    return await localforage.getItem('tmdOrder');
  }
  return null;
}