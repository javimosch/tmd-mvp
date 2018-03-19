import routesJson from '@/assets/routes.json';

export const state = () => ({
  items:[],
  current:null,
  availableItems:[]
});

export const mutations = {
  afterSyncRoute (state, {items, current}) {
    state.items = items;
    state.current = current;
  },
  afterSyncAvailableQuestions(state, items){
    state.availableItems = items;
  }
};

export const actions = {
  async syncAvailableQuestions({commit, state}){
    let matchedQuestions = state.items.filter(i=>state.current&&state.current.questions&&state.current.questions.includes(i.code));
    commit('afterSyncAvailableQuestions',matchedQuestions);
  },  
  async syncRoute ({state, commit,dispatch}, code) {
    let localList = routesJson.list;
    let res = localList.filter(item=>item.code==code);
    if(res.length===0) throw new Error('Route not found '+code)
    commit('afterSyncRoute',{
      items: localList,
      current: res[0]
    });
  await dispatch('syncAvailableQuestions');
  }
};

