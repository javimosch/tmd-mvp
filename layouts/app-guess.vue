<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <app-header :nav="false"></app-header>
      </div>
    </div>
    <div class="row  no-gutters">
      <div class="col-sm-12">
      <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header';
export default {
  components:{
    AppHeader:Header
  }
}
</script>
<style>

</style>
