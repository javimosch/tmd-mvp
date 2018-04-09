<template>
<div class="Benefits">
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
      <BenefitsSelectKey label="Select (leave blank for creation)"
                         placeholder="Search by name (press ENTER)"
                         v-model="item._id"
                         @change="handleSelectChange"></BenefitsSelectKey>
    </div>
    <div class="col-12 col-sm-8 col-md-4 col-lg-4 mt-3">
      <label>Name (*)</label>
      <input class="form-control d-block w-75"
             @change="onNameChange"
             placeholder=""
             v-model="item.name" />
    </div>
    <div class="col-12 col-sm-8 col-md-6 col-lg-6 mt-3">
      <label>Description</label>
      <textarea class="form-control d-block w-100"
                @change="onNameChange"
                placeholder=""
                v-model="item.description"></textarea>
    </div>
    <div class="col-12 col-sm-8 col-md-6 col-lg-6 mt-3">
      <label>Required fields (*)</label>
      <p>Those fields will determine whenever the benefit becomes available for the user or not.</p>
      <ul class="list-group">
        <li class="list-group-item position-relative"
            v-for="(field,k) in item.fields"
            :key="field._id"
            >
            <p v-html="field.name" class="p-2 position-absolute"></p>
            <b-btn class="float-right" @click="removeField(k)"><i class="fas fa-trash-alt"></i></b-btn>
        </li>
      </ul>
      <FieldsSelect class="mt-2"
                    label=""
                    placeholder="Select a field to add"
                    v-model="selectedField"
                    @change="addField"></FieldsSelect>
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
import BenefitsSelectKey from '@/components/tmd/controls/BenefitsSelectKey';
import FieldsSelect from '@/components/tmd/controls/FieldsSelect';
import JsEditor from '@/components/JsEditor';
import { call } from '@/plugins/rpcApi';
import _ from 'lodash';
export default {
  layout: 'app',
  name: 'Benefits',
  props: [],
  async fetch({store}) {},
  data() {
    return {
      selectedField: null,
      item: {
        _id: null,
        name: '',
        code: '',
        fields: []
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
    removeField(index){
      this.item.fields.splice(index,1);
    },
    addField(item) {
      if(this.item.fields.filter(f=>f._id==item._id).length>0) return;
      this.item.fields.push(_.clone(item))
      this.selectedField = null
    },
    async remove() {
      if (!this.item._id) {
        return
      }
      if (await NotyConfirm('Confirm Delete?')) {
        let r = await call('removeRecord', {
          model: 'benefit',
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
    async handleSelectChange(data) {
      if (!this.item._id) {
        return Object.assign(this.item, {
          name: '',
          code: JSON.stringify({
            name: ''
          }, null, 2)
        })
      }

      if (data) {
        if (!data.code) {
          data.code = '{}'
        }
        Object.assign(this.item, {
          description: '',
          name: ''
        }, data)
      }
    },
    savePayload() {
      let p = Object.assign({}, this.item)
      p.fields = p.fields.map(f => f._id)
      return p
    },
    async save() {
      this.autoSetName()
      try {
        JSON.parse(this.item.code)
      } catch (err) {
        return this.$noty.warning('Invalid json')
      }
      const {err, doc} = await this.$store.dispatch('adminBenefits/save', this.savePayload())
      if (err) {
        return this.$noty.warning('Unable to save: ' + err, {
          killer: true,
          timeout: false,
          layout: 'bottomRight'
        })
      } else {
        Object.assign(this.item, {
          _id:doc._id
        });
        return this.$noty.info('Saved', {
          killer: true,
          timeout: 1000
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
    BenefitsSelectKey,
    FieldsSelect,
    JsEditor
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Benefits {}

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
