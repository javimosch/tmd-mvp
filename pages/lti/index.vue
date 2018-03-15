<template>
  <section class="center-content">
  </section>
</template>

<script>

export default {
  layout:'app-guess',
  created(){
    if(this.$store.state.auth.isLogged){
      this.$router.push('/dashboard');
    }else{
      this.$router.push('/login');
    }
  },
  components: {
  }
}
</script>

<style>
.center-content {
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
