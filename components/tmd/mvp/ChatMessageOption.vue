<template>
    <b-btn :disabled="disabled" variant="secondary" class="ml-2">
      <slot name="text">Option</slot>
    </b-btn>
    <!--
	<div class="col p-0 mt-1 ChatMessageOption">
    
  </div>-->
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
    background-color:$color3!important;
    color:$color6!important;
    font-size: 9px;
    display: inline-block;
  }
  button[disabled]{
    background-color:$color1!important;
    color:$color5!important;
  }
</style>