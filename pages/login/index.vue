<template>
  <section class="center-content">
    <div>
      <form autocomplete="off">
      <b-form-input v-model="email" 
                  type="text"
                  placeholder="Same as Desktop app"></b-form-input>
       <b-form-input v-model="pwd" 
                  type="password"
                  placeholder="Same as Desktop app"></b-form-input>
      <button type="button" class="mt-2 btn btn-primary" @click="login()">Login</button>
    </form>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'app-guess',
  data () {
    return {
      email:process.env.loginEmail,
      pwd:process.env.loginPwd
    }
  },
  methods: {
    login () {
      let self = this;
      this.$store.dispatch('auth/login', {
        email: this.email,
        pwd: this.pwd
      }).then(()=>self.$router.push('/dashboard')).catch(err=>this.$noty.error(err.data));
    }
  }
}
</script>

<style>
.center-content {
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
