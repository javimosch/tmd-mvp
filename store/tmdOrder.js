import localforage from 'localforage';
import _ from 'lodash';


export const state = () => ({
  items: [],
  current: null,
  previousMessages: [],
});

function transformNode(n) {
  if (!process.env.isProduction) {
    if (n.messages) {
      n.messages = n.messages.map(m => `(${n.code}) ` + m);
    }
    if (n.message) {
      n.message = `(${n.code}) ` + n.message;
    }
  }
  if (n.messages) {
    try {
      n.messages = JSON.parse(n.messages);
    } catch (err) {}
    if (!n.message) {
      n.message = n.messages[0];
    }
  } else {
    if (n.message) {
      n.messages = [n.message];
    }
  }

  return n;
}

export const mutations = {
  afterCreate(state, current) {
    current.questions = current.questions.map(transformNode);
    state.current = current;
  },
  afterSync(state, {
    items,
    current
  }) {
    if (items.length > 0) {
      state.items = items;
    }

  },
  afterSelectNode(state, node) {
    if (!state.current) {
      throw new Error('A current order should exists at this point.');
    }
    state.current.questions.push(node);
    let q = state.current.questions;
    state.previousMessages = q.filter((x, k) => k !== q.length - 1);
  },
  afterResolveInput(state, input) {
    state.current.inputs.push(input);
  },
  setCurrent: (state, current) => {
    state.current = current || null;
    if (state.current) {
      let q = state.current.questions;
      state.previousMessages = q.filter((x, k) => k !== q.length - 1);
    }
  },
  updateMessages: (state, m) => state.current.messages = m
};

export const actions = {
  async resolveInput({
    commit
  }, {
    input,
    answer
  }) {
    input = _.cloneDeep(input);
    input.answer = answer;
    input.resolved = true;
    commit('afterResolveInput', input);
  },
  async create({
    commit,
    state,
    dispatch
  }, firstQuestion) {
    let item = {
      questions: [firstQuestion],
      inputs: [],
      solutions: []
    };
    await localforage.setItem('current', item);
    commit('afterCreate', item);
    await dispatch('createMessageFromLastNode');
  },
  async updateMessages(store, messages) {
    if (!store.state.current) await store.dispatch('syncCurrentFromCache');
    if (!store.state.current) throw new Error('There is no order selected');
    store.commit('updateMessages', messages);
  },
  async createMessageFromLastNode({
    state,
    dispatch
  }) {
    state.current.questions[state.current.questions.length - 1].messages.forEach(message => {
      dispatch('tmdChat/addMessage', {
        from: "Bot",
        text: message
      }, {
        root: true
      });
    });
  },
  async selectNode({
    commit,
    dispatch
  }, node) {
    node = transformNode(node);
    commit('afterSelectNode', node);
    await dispatch('createMessageFromLastNode');
  },
  async syncCurrentFromCache(store) {
    store.commit('setCurrent', (await localforage.getItem('current')) || null);
  },
  async sync({
    commit,
    state,
    dispatch
  }, questionCode) {
    let itemsFromCache = await localforage.getItem('orders');
    var items = _.unionBy(state.items, itemsFromCache, 'code');
    await dispatch('syncCurrentFromCache');
    commit('afterSync', {
      items: items || []
    });
  }
};