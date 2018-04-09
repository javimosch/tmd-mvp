<template>
<div class="SelectKey">
  <div class="row">
     <div class="col">
        <vue-good-table @on-row-click="handleRowClick"
                        :columns="columns"
                        :rows="items"
                        :search-options="searchOptions"
                        :pagination-options="{
        enabled: true,
        perPage: 20,
      }"
                        styleClass="vgt-table condensed " />
      </div>
  </div>
</div>

</template>

<script>
import _ from 'lodash';
export default {
  name: 'ListView',
  props: [
    'columns',
    'items'
  ],
  fetch() {},
  data() {
    return {
      searchOptions: {
        enabled: false
      }
    }
  },
  async asyncData() {
    return {}
  },
  computed: {
    
  },
  methods: {
    handleRowClick(info) {
      let doc = info.row;
      this.$emit('select', doc)
    }
  },
  components: {
    
  },
  created() {
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.ListView {
  position: relative;
}
</style>
