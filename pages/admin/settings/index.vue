<template>
<div class="Settings container">
  <div class="row justify-content-center">
    <div class="col-12">
      <b-nav class=""
             justified>
        <b-nav-item :active="isActive('admin-settings-chat')"
                    to="/admin/settings/chat">Chat</b-nav-item>
                    <b-nav-item :active="isActive('admin-settings-chat')"
                    to="/admin/settings/fieldGroups">Field groups</b-nav-item>
      </b-nav>
    </div>
  </div>
</div>

</template>

<script>
export default {
  layout: 'app',
  name: 'Settings',
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
    isActive(n) {
      return this.$store.state.route && this.$store.state.route.name === n
    }
  },
  components: {

  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Settings {}
</style>
