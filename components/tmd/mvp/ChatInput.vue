<template>
  <b-list-group-item>
	<div class="ChatInput">
    <div v-show="inputNode">
      <input 
          class="form-control"
          @keyup.enter="onSubmit"
          type="text"
          :placeholder="inputNode && inputNode.placeholder||''"
          />      
      
    </div> 
    <div v-show="!inputNode">
        <slot name="options"></slot>
    </div>   
  </div>
  </b-list-group-item>
</template>
<script>

export default {
  name:"ChatInput",
  props:['inputNode'],
  data(){
    return {
      
    }
  },
	methods: {
    onSubmit(e){
      this.$emit('onSubmit',e.target.value);
    }
  }
}	;
</script>
<style lang="scss" scoped>
  .ChatInput{
    padding:5px;
    
  }
</style>