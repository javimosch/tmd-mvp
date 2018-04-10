<template>
<div class="PublicLayout">
	<nuxt/>
  <div id="fb-root"></div>
  <div class="fb-customerchat"
       page_id="1611136268975764">
  </div>
</div>

</template>

<script>
export default {
  name: 'PublicLayout',
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

  },
  created() {},
  mounted() {
    if (typeof window !== 'undefined') {
      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) {
          return
        }
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.12&autoLogAppEvents=1'
        fjs.parentNode.insertBefore(js, fjs)
      }(document, 'script', 'facebook-jssdk'))
    }
  }
}

</script>

<style lang="scss" scoped="">
.PublicLayout {}
</style>
