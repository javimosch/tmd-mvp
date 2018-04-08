<template>
<div class="FieldsSelect">
  <label v-if="label"
         v-html="label"></label>
  <!--
  <SimpleSelect :value="value"
          @input="input"
                @change="change()">
    <option v-for="i in items"
            :key="i.value"
            v-bind:value="i.value"
            v-html="i.text"></option>
  </SimpleSelect>
-->
  
  <SelectKey 
  @onError="(err)=>$noty.warning(err)"
  model="field"
  descriptionField="name"
  :descriptionSearch="['name']"
  :value="value"
  @input="input"
  @change="change"
  :placeholder="placeholder||''"
  :columns="columns"
  :rows="items"></SelectKey>
</div>

</template>

<script>

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
    
    input(val) {
      this.$emit('input', val)
    },
    change(d) {
      this.$emit('change',d);
    }
  },
  components: {
    SelectKey,
    SimpleSelect
  },
  async created() {
    //await this.$store.dispatch('adminFields/update')
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.FieldsSelect {}
</style>
