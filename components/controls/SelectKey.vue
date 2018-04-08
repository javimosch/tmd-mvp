<template>
<div class="SelectKey" @keyup.esc="toggleModal(false)">
  <input v-if="false" class="form-control code"
         v-model="item._id"
         @keyup.enter="searchByCode" />
  <input :class="inputStyle"
         v-model="item[descriptionField]"
         :placeholder="placeholder||''"
         @keyup.enter="searchByDescription" />
  <button class="btn btn-primary SearchButton" @click="searchAll"><i class="fas fa-search"></i></button>
  <simple-modal-backdrop v-show="backdrop"></simple-modal-backdrop>
  <simple-modal v-show="modal"
                class="h-75">
    <div class="row no-gutters mb-2">
      <div class="col">
        <div class="float-right">
          <b-button variant="secondary"
                    @click="toggleModal(false)">Close (ESC)</b-button>
        </div>
      </div>
    </div>
    <div class="row no-gutters">
      <div class="col-12">
      	<input class="form-control mb-2"
         v-model="item[descriptionField]"
         :placeholder="placeholder||''"
         @keyup.enter="searchByDescription" />
      </div>
      <div class="col">
        <vue-good-table @on-row-click="onRowClick"
                        :columns="columns"
                        :rows="rows"
                        :search-options="searchOptions"
                        :pagination-options="{
        enabled: true,
        perPage: 20,
      }"
                        styleClass="vgt-table condensed " />
      </div>
    </div>
  </simple-modal>
</div>

</template>

<script>
import { call } from '@/plugins/rpcApi';
import { SimpleModal, SimpleModalBackdrop } from '@/styledComponents/modal';
import _ from 'lodash';
export default {
  name: 'SelectKey',
  props: [
    'columns',
    'placeholder',
    'value',
    'model',
    'descriptionField',
    'descriptionSearch'
  ],
  fetch() {},
  watch:{
  	value(v){
  		if(!v){
  			this.unselect();
  		}
  	}
  },
  data() {
    return {
      backdrop: false,
      modal: false,
      searchOptions: {
        enabled: false
      },
      hasSelection: false,
      item: {
        _id: null
      },
      rows: []
    }
  },
  async asyncData() {
    return {}
  },
  computed: {
    inputStyle() {
      return 'form-control description ' + (this.hasSelection ? 'selected' : '')
    }
  },
  methods: {
    toggleModal(v) {
      this.modal = v
      this.backdrop = v
      if(!v){
      	this.item[this.descriptionField] = this.original[this.descriptionField];
      }
    },
    select(doc) {
      this.$emit('input', doc._id)
      this.$emit('change', doc)
      this.item = doc;
      this.original = _.clone(doc);
      this.hasSelection = true
      this.toggleModal(false)
    },
    unselect() {
      this.item._id = null
      this.item[this.descriptionField] = '';
      this.hasSelection = false
    },
    async findById(id) {
      return await call('findOne', {
          _id: id,
          model: this.model
        })
    },
    async onRowClick(info) {
      try {
        let item = await this.findById(info.row.value)
        if (item) {
          return this.select(item)
        }
      } catch (err) {
        if (typeof err !== 'string') {
          return console.error(err)
        }
        this.$emit('onError',err);
      }
    },
    async searchByCode() {
      try {
        if (this.item._id) {
          let item = await this.findById(this.item._id)
          if (item) {
            return this.select(item)
          } else {
          	await this.searchAll();
          }
        }
      } catch (err) {
        if (typeof err !== 'string') {
          return console.error(err)
        }
        this.$emit('onError',err);
      }
    },
    async searchAll(docs) {
    	if(!docs) docs = [];
      if (docs.length > 1) {
        this.rows = docs
        this.unselect()
      } else {
        this.rows = await call('findPaginate', {
          model: this.model,
          select:['_id','name'],
          transform:['_id:value','name:text']
        })
        this.unselect()
      }
      this.toggleModal(true)
    },
    async searchByDescription() {
      let item = null
      try {
        let docs = await call('findInclude', {
          value: this.item[this.descriptionField],
          model: this.model,
          fields: this.descriptionSearch
        })
        if (docs.length === 1) {
          item = await call('findOne', {
            _id: docs[0].value,
            model: this.model
          })
          this.select(item)
        } else {

          this.searchAll(docs)

        }
      } catch (err) {
        if (typeof err !== 'string') {
          return console.error(err)
        }
        this.$emit('onError',err);
      }
    }
  },
  components: {
    SimpleModal,
    SimpleModalBackdrop
  },
  created() {
    if (!this.descriptionSearch) {
      throw new Error('descriptionSearch required');
    }
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.SelectKey {
	position: relative;
	padding-right:50px;
}

input.code {
  max-width: 150px;
  display: inline-block;
}

input.selected {
  border: 1px solid green;
  display: inline-block;
}
input.description{
	border-radius: 0.25rem 0px 0px 0.25rem;
}
.SearchButton{
	color:white;
	position: absolute;
    height: 38px;
    right: 0px;
    width: 50px;
    top: 0px;
    padding: 0px;
    margin: 0px;
    border-radius: 0px 0.25rem 0.25rem 0px;
}
</style>
