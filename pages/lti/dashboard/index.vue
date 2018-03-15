<template>
  <div class="container">
    <h2 class="mt-5">Dashboard</h2>
  <p>There are <span v-html="usersCount"></span> user accounts registered.</p>
  </div>
</template>
<script>
export default {
  layout: 'app',
  middleware:'auth',
  created(){
    
      this.$store.dispatch('dashboard/update');
    
  },
  data () {
    return {
    
    }
  },
  computed:{
    usersCount(){
      return this.$store.state.dashboard.users.count;
    }
  }
}
</script>

<style>

</style>
