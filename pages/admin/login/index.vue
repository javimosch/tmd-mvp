<template>
<div class="AdminLogin">
  <h3 class="text-center">Backoffice</h3>
  <div class="row justify-content-center">
    <div class="col-12">
      <input ref="pwd" class="d-block mx-auto" :value="defaultPassword" type="password" />
    </div>
    <div class="col-12">
      <b-btn size="md"
             class='mt-4 mx-auto d-block'
             @click="login"
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
    defaultPassword(){
      return process.env.loginPwd||'';
    }
  },
  methods: {
    login(){
      if(this.$refs.pwd.value==process.env.basicAuthPassword){
        this.$router.push('/admin/dash');
      }
    }
  },
  components: {

  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.AdminLogin {}
  button,a{
    max-width:200px;
  }
</style>
