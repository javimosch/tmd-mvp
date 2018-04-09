<template>
<div class="UsersListView">
  <h3>Users</h3>
  <ListView :columns="columns"
            :items="items"
            @select="select"></ListView>
</div>

</template>

<script>
import { call } from '@/plugins/rpcApi';
import ListView from '@/components/controls/ListView';
export default {
  name: 'UsersListView',
  props: [
    'value',
    'items'
  ],
  fetch() {},
  data() {
    return {
      //items: [],
      columns: [
        {
          label: 'email',
          field: 'email',
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
    select(doc) {
      call('findOne', {
        model: 'user',
        _id: doc._id
      }).then(item => {
        this.$emit('input', item._id)
        this.$emit('select', item)
      }).catch(console.error)
    }
  },
  components: {
    ListView
  },
  async created() {
  	/*
    try {
      this.items = await call('findPaginate', {
        model: 'user'
      })
    } catch (err) {
      this.$noty.warning(err.message)
    }*/
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.UsersListView {}
</style>
