<template>
<div class="AdminLogin container">
  <h3 class="text-center">Backoffice</h3>
  <div class="row justify-content-center">
    <div class="col-12 col-lg-12 mt-4">
      <input class="form-control "
             v-model="email"
             placeholder="your email" />
    </div>
    <div class="col-12 mt-4">
      <input ref="pwd"
             class="d-block mx-auto form-control"
             :value="defaultPassword"
             type="password"
             placeholder="password" />
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
import { call } from '@/plugins/rpcApi';
export default {
  layout: 'app-guess',
  name: 'AdminLogin',
  props: [],
  fetch() {},
  data() {
    return {
      email: ''
    }
  },
  
  computed: {
    defaultPassword() {
      return process.env.loginPwd || ''
    }
  },
  methods: {
    async login() {

      try {
        let user = await this.$store.dispatch('auth/login', {
          email: this.email,
          pwd: this.$refs.pwd.value
        })
        if (user) {
          this.$router.push('/admin/dash')
        } else {
          this.$noty.warning('Invalid credentials', {
            killer: true,
            timeout: 5000
          })
        }
      } catch (err) {
        this.$noty.warning(err.message)
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

input {
  max-width: 300px;
  margin: 0 auto;
  display: block;
}

button,
a {
  max-width: 200px;
}
</style>
