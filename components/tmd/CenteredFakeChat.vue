<template>
<div class="CenteredFakeChat container">
  <div class="row row align-items-start m-0 p-0">
    <div class="col align-self-center m-0 p-0">
      <Chat></Chat>
    </div>
  </div>
</div>

</template>

<script>
import Chat from '@/components/tmd/Chat';
import Typed from 'typed.js';
export default {
  name: 'CenteredFakeChat',
  props: [],
  fetch() {},
  data() {
    return {}
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {

  },
  components: {
  	Chat
  },
  created() {

  },
  mounted() {
  	if(process.server)return;
  	this.$store.commit('tmdChat/setInputDisabled',true)
  }
}

</script>

<style lang="scss" scoped="">
.CenteredFakeChat {
	opacity: 0.8;
}
</style>
