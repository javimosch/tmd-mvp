import localforage from 'localforage';
import _ from 'lodash';


export const state = () => ({
  items: [{
    questions: [{
      code: 400,
      title: "Freelancing",
      path: "/freelancing",
      message: "So, you are looking for something in frelancing section. Can you specify?",
      questions: [401, 402]
    }],
    inputs: [],
    solutions: []
  }],
  current:null,
  
});

export const mutations = {
  afterCreate(state,current){
    state.current = current;
  },
  afterSync(state, {items, current}) {
    if (items.length > 0) {
      state.items = items;
    }
    state.current = current||null;
  },

};

export const actions = {
  
  async create({commit, state},firstQuestion){
    let item = {
      questions:[firstQuestion],
      inputs:[],
      solutions:[]
    };
    await localforage.setItem('current',item);
    commit('afterCreate');
    
  },
  async sync({
    commit,
    state,
    dispatch
  }, questionCode) {
    let itemsFromCache = await localforage.getItem('orders');
    var items = _.unionBy(state.items, itemsFromCache,'code');
    let currentFromCache = (await localforage.getItem('current'))||null;
    commit('afterSync', {
      items: items || [],
      current: currentFromCache
    });
  }
};