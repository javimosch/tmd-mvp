<template>
<div class="Fields">
  <div class="row justify-content-right">
    <div class="col">
      <b-btn v-show="this.item._id"
             variant="danger"
             size="sm"
             class="float-right"
             @click="remove">Delete&nbsp;<i class="fas fa-trash-alt"></i></b-btn>
    </div>
  </div>
  <div class="row justify-content-left">
    <div class="col-12 col-sm-8 col-md-4 col-lg-4 mt-3">
      <FieldsSelect label="Select a field (leave blank for creation)"
                    placeholder="Search by name or group (press ENTER)"
                    v-model="item._id"
                    @change="handleSelectChange"></FieldsSelect>
    </div>
    <div class="col-12 col-sm-8 col-md-4 col-lg-4 mt-3">
      <label>Name (*)</label>
      <input class="form-control d-block w-75"
             @change="onNameChange"
             placeholder="Field Name"
             v-model="item.name" />
    </div>
    <div class="col-12 col-sm-8 col-md-6 col-lg-6 mt-3">
      <FieldGroupsSelectKey label="Group (*)"
                            placeholder="Search by name (press ENTER)"
                            v-model="item.group"></FieldGroupsSelectKey>
    </div>
  </div>
  <div class="row no-gutters">
    <div class="col-12 mt-3">
      <label>Metadata</label>
      <p>The JSON can contain any metadata and field properties. Properties listed in controls above will have priority over this data.</p>
      <js-editor v-show="isClient"
                 :height="maxHeight"
                 class="text-left"
                 cmMode="text/json"
                 v-model="item.code"></js-editor>
    </div>
  </div>
  <b-btn size="lg"
         class='SaveButton'
         @click="save()"
         variant="primary">Save</b-btn>
</div>

</template>

<script>
import { NotyConfirm } from '@/plugins/noty';
import FieldsSelect from '@/components/tmd/controls/FieldsSelect';
import FieldGroupsSelectKey from '@/components/tmd/controls/FieldGroupsSelectKey';
import JsEditor from '@/components/JsEditor';
import { call } from '@/plugins/rpcApi';
export default {
  layout: 'app',
  name: 'Fields',
  props: [],
  async fetch({store}) {
    // await store.dispatch('rpc/sync');
    // await store.dispatch('adminFields/update');
  },
  data() {
    return {
      item: {
        _id: null,
        name: '',
        code: ''
      },
      items: []
    }
  },
  async asyncData() {
    return {
      code: ''
    }
  },
  computed: {
    fieldItems() {
      return this.$store.state.adminFields.items
    },
    isClient() {
      return typeof window !== 'undefined'
    },
    maxHeight() {
      if (typeof window !== 'undefined') {
        return window.innerHeight
      } else {
        return 500
      }
    }
  },
  methods: {
    async remove() {
      if (!this.item._id) {
        return
      }
      if (await NotyConfirm('Confirm Delete?')) {
        let r = await call('removeRecord', {
          model: 'field',
          _id: this.item._id
        })
        if (r !== false) {
          console.info(r)
          Object.assign(this.item, {
            _id: null,
            name: '',
            code: ''
          })
        }
      }
    },
    async handleSelectChange() {
      if (!this.item._id) {
        return Object.assign(this.item, {
          name: '',
          code: JSON.stringify({
            name: ''
          }, null, 2)
        })
      } else {
        let data = await this.$store.dispatch('adminFields/fetch', this.item._id)
        if (!data.code) {
          data.code = '{}'
        }
        Object.assign(this.item, {
          group: null
        }, data)
      }
    },
    async save() {
      this.autoSetName()
      try {
        JSON.parse(this.item.code)
      } catch (err) {
        return this.$noty.warning('Invalid json')
      }
      try {
        let doc = await call('saveRecord', Object.assign({}, this.item, {
          model: 'field'
        }))
        Object.assign(this.item, doc)
        return this.$noty.info('Saved', {
          killer: true,
          timeout: 1000
        })
      } catch (err) {
        return this.$noty.warning('Unable to save: ' + err.message, {
          killer: true,
          timeout: false,
          layout: 'bottomRight'
        })
      }
    },
    onNameChange() {
      this.autoSetName()
    },
    autoSetName() {
      try {
        if (!this.item.code) {
          this.item.code = '{}'
        }
        JSON.parse(this.item.code)
        Object.assign(this.item, {
          code: JSON.stringify(Object.assign(JSON.parse(this.item.code) || {}, {
            name: this.item.name
          }), null, 2)
        })
      } catch (err) {}
    }
  },
  components: {
    FieldGroupsSelectKey,
    FieldsSelect,
    JsEditor
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Fields {}

.SaveButton {
  position: fixed;
  z-index: 9999;
  right: 30px;
  bottom: 15px;
  opacity: 0.7;
}

.SaveButton:hover {
  opacity: 1;
}
</style>
