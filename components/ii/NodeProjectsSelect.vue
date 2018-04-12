<template>
<div class="NodeProjectsSelect">
  <label v-if="label"
         v-html="label"></label>
  <SelectKey @onError="(err)=>$noty.warning(err)"
             model="benefit"
             descriptionField="name"
             :descriptionSearch="['name']"
             :value="value"
             @input="input"
             @change="change"
             @onClear="onClear"
             :placeholder="placeholder||''"
             :columns="columns"
             :rows="[]"
             :searchByIdFn="searchByIdFn"
             :searchAllFn="searchAllFn"></SelectKey>
</div>
</template>
<script>
import { call } from '@/plugins/rpcApi';
import SimpleSelect from '@/components/controls/SimpleSelect';
import SelectKey from '@/components/controls/SelectKey';
export default {
  name: 'NodeProjectsSelect',
  props: [
    'value',
    'label',
    'placeholder'
  ],
  async fetch() {},
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'text',
          filterOptions: {
            enabled: true
          }
        },
        {
          label: 'Description',
          field: 'description',
          filterOptions: {
            enabled: false
          }
        }
      ]
    }
  },
  async asyncData() {
    return {}
  },
  computed: {
    
  },
  methods: {
    async searchByIdFn(id){
      console.warn('searchByIdFn');
        return await call('findOne', {
          _id: id,
          model: 'benefit',
          populate:['fields']
        });
    },
    async searchAllFn() {
      let arr = await call('findPaginate', {
        model: 'node_project',
        select: [
          '_id',
          'name',
          //'code'
        ],
        //extractFromJsonField:['code',['group']],
        transform: [
          '_id:_id',
          'name:text',
        ]
      })
      return arr.map(d => {
        return d;
      });
    },
    onClear(){
      this.$emit('onClear');
    },
    input(val) {
      this.$emit('input', val)
    },
    change(d) {
      this.$emit('change', d)
    }
  },
  components: {
    SelectKey,
    SimpleSelect
  },
  async created() {
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.NodeProjectsSelect {}
</style>
