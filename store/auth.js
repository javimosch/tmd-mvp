import {
  login,
  getIsLoggedFromCache,
  setIsLoggedInCache,
  logout
} from '@/plugins/auth';

import {
  me as getCurrentUser
}
from '@/plugins/user';

export const state = () => ({
  isLogged: null,
  user: null
});

export const mutations = {
  setUser(state, user) {
    state.isLogged = user !== null
    setIsLoggedInCache(user !== null);
    state.user = user;
  }
};

export const actions = {


  async login({
    commit
  }, {
    email,
    pwd
  }) {
    let user = await login(email, pwd)
    commit('setUser', user);
    return user;
  },


  async update({
    commit,
    state
  }) {

    let isLogged =  getIsLoggedFromCache();

    if (!!isLogged) {
      let user = state.user;
      if (!user) {
        console.log('Fetching user')
        user = await getCurrentUser();
        console.log(JSON.stringify(user));
      }
      commit('setUser', user);
      return;
    } else {
      commit('setUser', null);
    }



  },

  async logout({
    commit
  }) {
    commit('setUser', null);
    return await logout()
  }
};