<template>
  <div class="container">
    
    
    <b-breadcrumb :items="breadcrumbs"/>

    <div>
  <b-button-group vertical>
    <b-button variant="secondary" to="/settings/databases">Databases</b-button>
    
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
