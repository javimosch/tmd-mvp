import {
  call
} from '@/plugins/rpcApi';

export const state = () => ({
  items: [],
});

export const getters = {
  documents: state => state.actions
};

export const mutations = {
  update: (s, items) => {
    s.items = items
  }
};

export const actions = {
  async update({
    commit,
    state
  }) {
    commit('update', await call('findPaginate',{
      model:'benefit',
      options:{
        populate:['fields']
      }
    }));
  },
  async save({
    commit,
    state,
    dispatch
  }, data) {
    try {
      data.model='benefit';
      let doc = await call('saveRecord',data);
      console.info(doc);
      await dispatch('update');
      return {
        err:null,
        doc
      };
    } catch (err) {
      console.warn(err);
      return {
        err,
        doc:null
      };
    }
  },
  async fetch({
    commit
  },_id){
    try {
      return await call('findOne',{
        model:"benefit",
        _id
      });
    } catch (err) {
      console.warn(err);
      return null;
    }
  }
};