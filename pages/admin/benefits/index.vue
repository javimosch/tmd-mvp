<template>
<div class="Benefits">
  <div class="row justify-content-right">
    <div class="col">
      
      <b-btn v-show="this.item._id" variant="danger" size="sm" class="float-right" @click="remove" >Delete&nbsp;<i class="fas fa-trash-alt"></i></b-btn>
      
    </div>
  </div>
  <div class="row justify-content-left">
    <div class="col-12 col-sm-8 col-md-4 col-lg-4 mt-3">
      <BenefitsSelectKey 
        label="Field selector"
        placeholder="Search by name (press ENTER)"
        v-model="item._id"
                    @change="handleSelectChange"></BenefitsSelectKey>
    </div>
    <div class="col-12 col-sm-8 col-md-4 col-lg-4 mt-3">
      <label>Name</label>
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

import {NotyConfirm} from '@/plugins/noty';
import BenefitsSelectKey from '@/components/tmd/controls/BenefitsSelectKey';
import JsEditor from '@/components/JsEditor';
import { call } from '@/plugins/rpcApi';
export default {
  layout: 'app',
  name: 'Benefits',
  props: [],
  async fetch({store}) {
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
    async remove(){
      if(!this.item._id) return;
      if(await NotyConfirm('Confirm Delete?')){
        let r = await call('removeRecord',{
          model:'benefit',
          _id: this.item._id
        });
        if(r!==false){
          console.info(r);
          Object.assign(this.item,{
            _id:null,
            name:'',
            code:''
          });
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
        let data = await this.$store.dispatch('adminBenefits/fetch', this.item._id)
        if (!data.code) {
          data.code = '{}'
        }
        Object.assign(this.item,{
        	description:'',
        	name:''
        }, data)
      }
    },
    async save() {
      this.autoSetName();
      try {
        JSON.parse(this.item.code)
      } catch (err) {
        return this.$noty.warning('Invalid json')
      }
      const {err, doc} = await this.$store.dispatch('adminBenefits/save', this.item)
      if (err) {
        return this.$noty.warning('Unable to save: ' + err, {
          killer: true,
          timeout: false,
          layout: 'bottomRight'
        })
      } else {
        Object.assign(this.item, doc)
        return this.$noty.info('Saved',{
          killer:true,
          timeout:1000
        });
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
    BenefitsSelectKey,
    JsEditor
  },
  created() {},
  mounted() {
    
  }
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
