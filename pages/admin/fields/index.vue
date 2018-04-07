<template>
<div class="Fields">
  <div class="row justify-content-left">
    <div class="col-12 col-sm-8 col-md-4 col-lg-4 mt-3">
      <FieldsSelect v-model="item._id"
                    @change="handleSelectChange()"></FieldsSelect>
    </div>
    <div class="col-12 col-sm-8 col-md-4 col-lg-4 mt-3">
      <label>Name</label>
      <input class="form-control"
             @change="onNameChange"
             placeholder="Field Name"
             v-model="item.name" />
    </div>
  </div>
  <div class="row no-gutters">
    <div class="col-12 mt-3">
      <label>JSON</label>
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
import FieldsSelect from '@/components/tmd/controls/FieldsSelect';
// import SimpleSelect from '@/components/controls/SimpleSelect';
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
        Object.assign(this.item, data)
      }
    },
    async save() {
      this.autoSetName();
      try {
        JSON.parse(this.item.code)
      } catch (err) {
        return this.$noty.warning('Invalid json')
      }
      const {err, doc} = await this.$store.dispatch('adminFields/save', this.item)
      if (err) {
        return this.$noty.warning('Unable to save: ' + err, {
          killer: true,
          timeout: false,
          layout: 'bottomRight'
        })
      } else {
        Object.assign(this.item, doc)
      }
    },
    onNameChange() {
      this.autoSetName();
    },
    autoSetName(){
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
