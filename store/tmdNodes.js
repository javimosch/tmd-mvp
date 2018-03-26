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
  async sync({state, commit}){
    let items = await fetchAll();
    commit('set', items)
  },
  async getNode({
    state,
    commit,
    dispatch
  }, code) {
    if(state.items.length===0){
      await dispatch('sync');
    }
    return await fetchByCode(code);
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