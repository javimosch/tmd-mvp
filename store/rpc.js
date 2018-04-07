import {sync, getActions} from '@/plugins/rpcApi';


export const state = () => ({
  actions: [],
  namesList:[]
});

export const getters = {
  documents:state=>state.actions
};

export const mutations = {
  update:(s,res)=>{
  	s.actions=res.actions;
  	s.namesList= res.namesList;
  }
};

export const actions = {
  async sync({
    commit,
    state
  }) {
    commit('update', await sync());
  }
};
