<template>
<div class="FieldsSelect">
  <label>Field selector</label>
  <SimpleSelect :value="value"
  				@input="input"
                @change="change()">
    <option v-for="i in items"
            :key="i.value"
            v-bind:value="i.value"
            v-html="i.text"></option>
  </SimpleSelect>
</div>

</template>

<script>
import SimpleSelect from '@/components/controls/SimpleSelect';
export default {
  name: 'FieldsSelect',
  props: ['value'],
  async fetch() {
  	
  },
  data() {
    return {
    	selectedValue:''
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
  	input(val){
  		this.$emit('input',val);
  	},
  	change(){
  		this.$emit('change');
  	}
  },
  components: {
    SimpleSelect
  },
  async created() {
  	await this.$store.dispatch('adminFields/update');
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.FieldsSelect {}
</style>
