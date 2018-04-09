<template>
<div class="UsersSelectKey">
  <label v-if="label"
         v-html="label"></label>
  <SelectKey @onError="(err)=>$noty.warning(err)"
             model="user"
             descriptionField="email"
             :descriptionSearch="['email']"
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
  name: 'UsersSelectKey',
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
        return await call('findOne', {
          _id: id,
          model: 'user',
          //populate:['fields']
        });
    },
    async searchAllFn() {
      let arr = await call('findPaginate', {
        model: 'user',
        select: [
          '_id',
          'email',
          //'code'
        ],
        //extractFromJsonField:['code',['group']],
        transform: [
          '_id:_id',
          'email:text',
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
.UsersSelectKey {}
</style>
