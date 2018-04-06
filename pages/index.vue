<template>
<div class="Root">
</div>

</template>

<script>
export default {
  name: 'Root',
  props: [],
  fetch() {},
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {

  },
  components: {

  },
  created() {
    if (process.env.nuxtHome) {
      this.$router.push(process.env.nuxtHome)
    }

  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Root {}
</style>
