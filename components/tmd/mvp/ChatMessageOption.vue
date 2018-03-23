<template>
	<div class="mt-1 ChatMessageOption">
    <b-btn :disabled="disabled" variant="secondary">
      <slot name="text">Option</slot>
    </b-btn>
  </div>
</template>
<script>

export default {
  name:"ChatMessageOption",
  props:['disabled'],
  data(){
    return {
      
    }
  },
	components: {
    
  }
}	;
</script>
<style lang="scss" scoped>
  .ChatMessageOption{
    
  }
  button{
    background-color:#3270C0;
  }
</style>