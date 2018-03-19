<template>
	<b-list-group-item>
		<div class="ChatMessage">
      <slot>Cras justo odio</slot>  
    </div>
  </b-list-group-item>
</template>
<script>

export default {
  name:"ChatMessage",
  data(){
    return {
      
    }
  },
	components: {
    
  }
}	;
</script>
<style lang="scss" scoped>
  .ChatMessage{
    padding:5px;
    
  }
</style>