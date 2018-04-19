<template>
<div class="Root">
  <VerticalLanding></VerticalLanding>
</div>
</template>
<script>
import VerticalLanding from '@/components/tmd/VerticalLanding'
export default {
  layout:'public',
  name: 'Root',
  props: [],
  head() {
    return {
      title: 'Tousmesdroits - Vertical Landing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Tousmesdroits description'
        }
      ]
    }
  },
  fetch() {},
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {

  },
  components: {
    VerticalLanding
  },
  created() {
    if (process.env.nuxtHome) {
      //this.$router.push(process.env.nuxtHome)
    }
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Root {}
</style>
