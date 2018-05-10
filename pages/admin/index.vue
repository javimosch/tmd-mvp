<template>
<div class="Root">
  
</div>
</template>
<script>
export default {
  layout:'public',
  name: 'Root',
  props: [],
  fetch() {},
  
  computed: {

  },
  methods: {

  },
  components: {
  
  },
  created() {

  },
  mounted() {
    this.$router.push({
        name:'admin-login',
        params:{},
        query:{}
      })
      console.log('redirecting')
  }
}
</script>
<style lang="scss" scoped>
.Root {}
</style>
