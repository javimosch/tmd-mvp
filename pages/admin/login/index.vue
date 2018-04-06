<template>
<div class="AdminLogin">
  <h3 class="text-center">Backoffice</h3>
  <div class="row justify-content-center">
    <div class="col-2">
      <b-btn size="lg"
             class='w-100 mt-4'
             to="/admin/dash"
             variant="primary">Login</b-btn>
    </div>
  </div>
</div>

</template>

<script>
export default {
  layout: 'app-guess',
  name: 'AdminLogin',
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
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.AdminLogin {}
</style>
