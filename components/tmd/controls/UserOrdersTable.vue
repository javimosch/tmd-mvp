<template>
<div class="UserOrdersTable">
  <h3 v-show="showTitle" v-html="getTitle"></h3>
  <ListView :columns="columns"
            :items="items"
            @select="select"></ListView>
</div>

</template>

<script>
import { call } from '@/plugins/rpcApi';
import ListView from '@/components/controls/ListView';
export default {
  name: 'UserOrdersTable',
  props: [
    'item','title'
  ],
  watch: {
    async item(v) {
      if (!v) {
        this.items = []
      }
      this.items = this.item.orders
    }
  },
  fetch() {},
  data() {
    return {
      items: [],
      columns: [
        {
          label: 'Number',
          field: 'number',
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
    showTitle(){
      return this.title!==false;
    },
    getTitle() {
      if (this.item && this.item._id) {
        return `${this.item.email} orders`
      } else {
        return 'User orders'
      }
    }
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
.UserOrdersTable {}
</style>
