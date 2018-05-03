<template>
<div class="LandingTransactions p-5">
  <div class="row no-gutters justify-content-center align-items-center">
  	<div class="col-12 col-md-5 text-center align-self-center">
  		<TinyChat></TinyChat>
  	</div>
  	<div class="col-12 col-md-7">
  		<div class="list-group Table"
       ref="table">
    <LandingTransactionItem v-for="item in items"
                            :key="item"
                            :uniqueId="item"
                            @remove="removeItem"
                            @lowLife="addItem"></LandingTransactionItem>
  </div>
  	</div>
  </div>
</div>

</template>

<script>
import $ from 'jquery'
import shortid from 'shortid';
import TinyChat from '@/components/TinyChat';
import LandingTransactionItem from '@/components/LandingTransactionItem';
export default {
  name: 'LandingTransactions',
  props: [],
  fetch() {},
  data() {
    return {
      coldown: null,
      interval: null,
      items: []
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
    removeItem(_id) {
      this.items.splice(this.items.indexOf(_id), 1)
      this.coldown = Date.now() + 1000 * 2
    },
    addItem() {
      this.items.push(shortid.generate())
      this.scrollToBottom();
    },
    scrollToBottom(){
    	var el = this.$refs.table
      $(el).animate({
        scrollTop: el.scrollHeight
      }, 1000)
    }
  },
  components: {
    LandingTransactionItem,
    TinyChat
  },
  created() {},
  destroyed() {
    clearInterval(this.interval)
  },
  mounted() {
    if (process.server) {
      return
    }
    var self = this
    self.addItem()
  }
}

</script>

<style lang="scss" scoped="">
.LandingTransactions {
  min-height: 300px;
}

.Table {
  max-height: 100px;
  overflow: hidden;
}
</style>
