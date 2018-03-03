<template>
  <div class="container mt-5">
    
    
    <b-breadcrumb :items="breadcrumbs"/>

    <div>
  <b-button-group vertical>
    <b-button class="mt-1" variant="secondary" to="/settings/databases">Remote databases</b-button>
    <b-button class="mt-1" variant="secondary" to="/settings/export/mappings">Products export mappings</b-button>
    <b-button class="mt-1" variant="secondary" to="/settings/export/products">Products export</b-button>
  </b-button-group>
</div>

  </div>
</template>

<script>
import {apiIsAlive} from '@/plugins/api';
export default {
  layout: 'app',
  data () {
    return {
      breadcrumbs:[{
        text:'Dashboard',
        to:'/dashboard'
      },
      {
        text:'Settings',
        active:true
      }
      ]
    }
  },
 mounted () {
   

  },
  methods: {
   
  },
  components: {
    
  }
}
</script>

<style>

</style>
