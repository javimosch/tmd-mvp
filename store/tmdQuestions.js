import routesJson from '@/assets/routes.json';

export const state = () => ({
  items: [],
  current: null,
  availableItems: []
});

export const mutations = {
  afterSyncRoute(state, {
    items,
    current
  }) {
    state.items = items;
    state.current = current;
  },
  afterSyncAvailableQuestions(state, items) {
    state.availableItems = items;
  }
};

function includes(arr, v) {
  return arr.map(vv => vv.toString()).includes(v.toString());
}

function equal(v1, v2) {
  return v1.toString() == v2.toString();
}

export const actions = {
  async syncAvailableQuestions({
    commit,
    state
  }) {
    let matchedQuestions = state.items.filter(i => state.current && state.current.nextNodes && includes(state.current.nextNodes, i.code));
    commit('afterSyncAvailableQuestions', matchedQuestions);
  },
  async syncRoute({
    state,
    commit,
    dispatch
  }, code) {
    let localList = routesJson.nodes;
    let res = localList.filter(item => equal(item.code, code));
    if (res.length === 0) throw new Error('Route not found ' + code)
    commit('afterSyncRoute', {
      items: localList,
      current: res[0]
    });
    await dispatch('syncAvailableQuestions');
  }
};