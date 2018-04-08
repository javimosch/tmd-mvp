<template>
<div class="FieldsSelect">
  <label v-if="label"
         v-html="label"></label>
  <SelectKey @onError="(err)=>$noty.warning(err)"
             model="benefit"
             descriptionField="name"
             :descriptionSearch="['name']"
             :value="value"
             @input="input"
             @change="change"
             :placeholder="placeholder||''"
             :columns="columns"
             :rows="items"
             :searchAllFn="searchAllFn"></SelectKey>
</div>
</template>
<script>
import { call } from '@/plugins/rpcApi';
import SimpleSelect from '@/components/controls/SimpleSelect';
import SelectKey from '@/components/controls/SelectKey';
export default {
  name: 'FieldsSelect',
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
    async searchAllFn() {
      let arr = await call('findPaginate', {
        model: 'benefit',
        select: [
          '_id',
          'name',
          //'code'
        ],
        //extractFromJsonField:['code',['group']],
        transform: [
          '_id:value',
          'name:text',
          //'code:code',
          //'group:group'
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
.FieldsSelect {}
</style>
