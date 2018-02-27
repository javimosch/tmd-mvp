import {count as getUsersCount} from '@/plugins/user';

export const state = () => ({
  users: {
  	count:0
  }
});

export const mutations = {
  setUsersCount (state, {count}) {
    state.users.count = count;
  }
};

export const actions = {
  async update ({commit}) {
    commit('setUsersCount', await getUsersCount());
  }
};



