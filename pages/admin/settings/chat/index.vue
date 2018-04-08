<template>
<div class="Chat">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <b-breadcrumb :items="breadcrumbs" />
      </div>
    </div>
  </div>
  <div class="row justify-content-left">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12 mt-3">
      <label>Fields</label>
      <p>The chatbot will request the user to answer fields following a field group order.</p>
      <ul class="list-group">
        <li class="list-group-item position-relative"
            v-for="(field,k) in item.fieldGroups"
            :key="field._id">
          <p v-html="field.name"
             class="p-2 position-absolute"></p>
          <b-btn class="float-right"
                 @click="removeField(k)"><i class="fas fa-trash-alt"></i></b-btn>
        </li>
      </ul>
      <FieldGroupsSelectKey class="mt-2"
                            label=""
                            placeholder="Select a field group"
                            v-model="selectedField"
                            @change="addFieldGroup"></FieldGroupsSelectKey>
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
import { call } from '@/plugins/rpcApi';
import FieldGroupsSelectKey from '@/components/tmd/controls/FieldGroupsSelectKey';
import _ from 'lodash';
export default {
  layout: 'app',
  name: 'Chat',
  props: [],
  fetch() {},
  data() {
    return {
      breadcrumbs: [
        {
          text: 'Settings',
          to: '/admin/settings'
        },
        {
          text: 'Chat',
          active: true
        }
      ],
      selectedField: null,
      item: {
        name:"default",
        fieldGroups: []
      }
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
    addFieldGroup(data) {
      this.item.fieldGroups.push(_.clone(data))
    },
    getSavePayload(){
      return Object.assign({},this.item,{
        fieldGroups: this.item.fieldGroups.map(fg=>fg._id)
      });
    },
    async save() {
      try {
        let doc = await call('saveRecord', Object.assign({}, this.getSavePayload(), {
          model: 'setting'
        }))
        console.info(doc)
        this.item._id = doc._id;
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
    FieldGroupsSelectKey
  },
  async created() {
    try {
      let doc = await call('findOne', {
        model: 'setting',
        query:{
          name: 'default'
        }
      })
      if(doc){
        Object.assign(this.item, doc)
      }
    } catch (err) {
      console.error(err)
      this.$noty.warning(err.message, {
        killer: true,
        timeout: false
      })
    }
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Chat {}
</style>
