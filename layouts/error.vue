<template>
	

  <div class="container mt-5">

  	<div v-if="error.statusCode===401">
  		<h2 class="text-center">Please, login</h2>
  	</div>
  	
  	<div v-if="error.statusCode===404">
  		<h2 class="text-center">Resource not found</h2>
      <p>You can supply the follow content to support.</p>
      <textarea class="form-control" v-html="errorAsString"></textarea>
  	</div>

  	<div v-if="error.statusCode===500">
  		<h2 class="text-center">Server error</h2>
      <p>You can supply the follow content to support.</p>
      <textarea class="form-control" v-html="errorAsString"></textarea>
  	</div>

  	<div v-if="isUnkown(error.statusCode)">
  		<h2 class="text-center">Unkown error</h2>
  		<p>You can supply the follow content to support.</p>
        
          
          <div  class="form-control" v-html="displayInfo()"></div>
        
        
      
  	</div>

  	<b-button class="mx-auto d-block mt-2" @click="back()" variant="primary" size="md">Back</b-button>

  </div>
 
</template>

<script>
var errToJSON = require('error-to-json')
export default {
  props: ['error'],
  layout: 'app-guess',
  created(){
    console.warn(this.error);
  },
  methods:{
    displayInfo(){
      return JSON.stringify(this.error);
    },
  	isUnkown(status){
  		return ![401,404,500].includes(status);
  	},
  	back(){
  		if(this.error.statusCode===401){
  			this.$router.push('/login')
  		}else{
  			this.$router.push('/')
  		}
  	}
  },
  computed:{
    errorAsString(){
      return JSON.stringify(errToJSON(this.error),null,2);
    }
  },
  components:{
  	
  }
}
</script>
<style lang="scss" scoped>
  textarea{
    min-height:300px;
  }
</style>