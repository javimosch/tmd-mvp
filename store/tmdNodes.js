import routesJson from '@/assets/routes.json';

export const state = () => ({
  items:[]
});

export const mutations = {
  set(state, items) {
    state.items = items;
  }
};

export const getters = {
  getAll: state => state.items,
};

export const actions = {
  async syncRoute({
    state,
    commit,
    dispatch
  }, code) {
    let items = await fetchAll();
    await dispatch('tmdOrder/sync', await fetchByCode(code),{root:true});
    commit('set', items)
  }
};

async function fetchAll(){
  let localList = routesJson.nodes;
  return localList;
}

async function fetchByCode(code){
  let nodes = routesJson.nodes;
  let res = nodes.filter(item => item.code.toString(), code.toString());
  if (res.length === 0) throw new Error('Route not found ' + code)
  return res[0];
}