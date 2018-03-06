<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-12 m-0 p-0">
        <b-breadcrumb :items="breadcrumbs" />
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6 m-0 p-0">
        <h3>Configuration</h3>
        <b-button v-if="true" class="mt-1" variant="primary" size="lg" to="/settings/databases">Remote databases</b-button>
        <b-button class="mt-1 ml-2" variant="primary" size="lg" to="/settings/export/mappings">Product mappings</b-button>
      </div>
      <div class="col-md-6 m-0 p-0">
        <h3>Export</h3>
        <b-button class="mt-1" variant="primary" size="lg" to="/settings/export/products">Products</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import { apiIsAlive } from '@/plugins/api';
export default {
  layout: 'app',
  data() {
    return {
      breadcrumbs: [{
          text: 'Dashboard',
          to: '/dashboard'
        },
        {
          text: 'Settings',
          active: true
        }
      ]
    }
  },
  mounted() {


  },
  methods: {

  },
  components: {

  }
}

</script>
<style>
</style>
