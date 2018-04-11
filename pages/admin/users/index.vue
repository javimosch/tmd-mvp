<template>
<div class="Users">

  

  <div v-show="this.item._id"
       class="row justify-content-right">
    <div class="col">
      <b-btn variant="danger"
             size="sm"
             class="float-right"
             @click="remove">Delete&nbsp;<i class="fas fa-trash-alt"></i></b-btn>
    </div>
  </div>
  <div class="row justify-content-left">
    <div class="col-12 col-sm-8 col-md-6 col-lg-6 mt-3">
      <UsersSelectKey label="Select an user to edit"
                      placeholder="Search by name (press ENTER)"
                      v-model="item._id"
                      @change="onItemSelected" @clear="clear"></UsersSelectKey>
    </div>
    <div class="col-12 col-sm-8 col-md-6 col-lg-6 mt-3">
      <label>Email</label>
      <input class="form-control d-block w-75"
             v-model="item.email" />
    </div>
    <div class="col-12 col-sm-8 col-md-6 col-lg-6 mt-3">
      <label>New password</label>
      <input class="form-control d-block w-50"
             v-model="item.password" type="password" />
    </div>
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
      <b-btn size="lg"
             class='SaveButton'
             @click="save()"
             variant="primary">Save</b-btn>
    </div>
  </div>
</div>

</template>

<script>
import { NotyConfirm } from '@/plugins/noty';
import { call } from '@/plugins/rpcApi';
import UsersSelectKey from '@/components/tmd/controls/UsersSelectKey';
import UsersListView from '@/components/tmd/controls/UsersListView';
export default {
  layout: 'app',
  name: 'Users',
  props: [],
  fetch() {},
  data() {
    return {
      item: {
        email:'',
        password:''
      }
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
    onItemSelected(item) {
      Object.assign(this.item, item)
    },
    clear(){
    	Object.assign(this.item, {
            _id: null,
            email: '',
            password:''
          });
    },
    async remove() {
      if (!this.item._id) {
        return
      }
      if (await NotyConfirm('Confirm Delete?')) {
        let r = await call('removeRecord', {
          model: 'user',
          _id: this.item._id
        })
        if (r !== false) {
          console.info(r)
          this.clear();
        }
      }
    },
    async save() {
      try {
        let doc = await call('saveUser', Object.assign({}, this.item, {
          //model: 'user'
        }))
        console.info(doc);
        this.clear();
        this.$noty.info('Saved');
      } catch (err) {
        console.error(err)
        this.$noty.warning(err.message,{
        	killer:true,
        	timeout:false
        });
      }
    }
  },
  components: {
    UsersSelectKey,
    UsersListView
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Users {}
</style>
