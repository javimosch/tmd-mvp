<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <app-header :nav="true"></app-header>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
      <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header';
export default {
  middleware:'auth',
  fetch({store, error}){
      //store.dispatch('dashboard/update').catch(error);
  },
  components:{
    AppHeader:Header
  }
}
</script>
<style>

</style>
