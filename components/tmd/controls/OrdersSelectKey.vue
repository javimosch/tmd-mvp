<template>
<div class="OrdersSelectKey">
  <label v-if="label"
         v-html="label"></label>
  <SelectKey @onError="(err)=>$noty.warning(err)"
             model="order"
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
  name: 'OrdersSelectKey',
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
          label: 'email',
          field: 'text',
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
          model: 'order',
          //populate:['fields']
        });
    },
    async searchAllFn() {
      let arr = await call('findPaginate', {
        model: 'order',
        select: [
          '_id',
          'number',
          //'code'
        ],
        //extractFromJsonField:['code',['group']],
        transform: [
          '_id:_id',
          'number:number',
          //'code:code',
          //'group:group'
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
.OrdersSelectKey {}
</style>
