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
      }).then((user)=>{
        if(!['directeur','root'].includes(user.type)){
          return self.$noty.warning('Forbidden')  
        }
        self.$router.push('/dashboard')
      }).catch(err=>this.$noty.error(err.data));
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

</style>
