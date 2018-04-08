<template>
<div class="FieldsSelect">
  <label v-if="label"
         v-html="label"></label>
  <SelectKey @onError="(err)=>$noty.warning(err)"
             model="field"
             descriptionField="name"
             :descriptionSearch="['name','group']"
             :value="value"
             @input="input"
             @change="change"
             :placeholder="placeholder||''"
             :columns="columns"
             :rows="items"
             :searchByIdFn="searchByIdFn"
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
          label: 'Group',
          field: 'group',
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
    items() {
      return this.$store.state.adminFields.items
    }
  },
  methods: {
    async searchByIdFn(id){
        return await call('findOne', {
          _id: id,
          model: 'field',
        });
    },
    async searchAllFn() {
      let arr = await call('findPaginate', {
        model: 'field',
        select: [
          '_id',
          'name',
          'code'
        ],
        extractFromJsonField:['code',['group']],
        transform: [
          '_id:_id',
          'name:text',
          'code:code',
          'group:group'
        ]
      })
      return arr.map(d => {
        //d.group = JSON.parse(d.code).group || '';
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
    // await this.$store.dispatch('adminFields/update')
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.FieldsSelect {}
</style>
