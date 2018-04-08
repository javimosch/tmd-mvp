<template>
<div class="FieldGroupsSelectKey">
  <label v-if="label"
         v-html="label"></label>
  <SelectKey @onError="(err)=>$noty.warning(err)"
             model="user"
             descriptionField="name"
             :descriptionSearch="['name']"
             :value="value"
             @input="input"
             @change="change"
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
  name: 'FieldGroupsSelectKey',
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
          label: 'name',
          field: 'name',
          filterOptions: {
            enabled: true
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
          model: 'field_group',
          //populate:['fields']
        });
    },
    async searchAllFn() {
      let arr = await call('findPaginate', {
        model: 'field_group',
        select: [
          '_id',
          'name',
          //'code'
        ],
        //extractFromJsonField:['code',['group']],
        transform: [
          '_id:_id',
          'name:name',
        ]
      })
      return arr.map(d => {
        return d;
      });
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
.FieldGroupsSelectKey {}
</style>
