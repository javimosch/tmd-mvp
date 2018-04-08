<template>
<div class="FieldGroups">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <b-breadcrumb :items="breadcrumbs" />
      </div>
    </div>
  </div>
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
      <FieldGroupsSelectKey label="Select an field group to edit"
                            placeholder="Search by name (press ENTER)"
                            v-model="item._id"
                            @change="onItemSelected"></FieldGroupsSelectKey>
    </div>
    <div class="col-12 col-sm-8 col-md-6 col-lg-6 mt-3">
      <label>Name</label>
      <input class="form-control d-block w-75"
             v-model="item.name"
             placeholder="" />
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
import FieldGroupsSelectKey from '@/components/tmd/controls/FieldGroupsSelectKey';

export default {
  layout: 'app',
  name: 'FieldGroups',
  props: [],
  fetch() {},
  data() {
    return {
      breadcrumbs: [{
        text: 'Settings',
        to: '/admin/settings'
      },{
        text: 'Field groups',
        active: true
      }],
      item: {}
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
    clear() {
      Object.assign(this.item, {
        _id: null,
        name: ''
      })
    },
    async remove() {
      if (!this.item._id) {
        return
      }
      if (await NotyConfirm('Confirm Delete?')) {
        let r = await call('removeRecord', {
          model: 'field_group',
          _id: this.item._id
        })
        if (r !== false) {
          console.info(r)
          this.clear()
        }
      }
    },
    async save() {
      try {
        let doc = await call('saveRecord', Object.assign({}, this.item, {
          model: 'field_group'
        }))
        console.info(doc)
        this.clear()
        this.$noty.info('Saved')
      } catch (err) {
        console.error(err)
        this.$noty.warning(err.message, {
          killer: true,
          timeout: false
        })
      }
    }
  },
  components: {
    UsersSelectKey,
    FieldGroupsSelectKey
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.FieldGroups {}
</style>
