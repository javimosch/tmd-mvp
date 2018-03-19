<template>
  <b-list-group-item>
	<div class="ChatInput">
    <div v-show="canWrite">
      <b-form-input 
          :value="value"
          @input="onInput"
          type="text"
          placeholder="Enter your name"
          >      
      </b-form-input>   
    </div> 
    <div v-show="!canWrite">
        <slot name="options"></slot>
    </div>   
  </div>
  </b-list-group-item>
</template>
<script>

export default {
  name:"ChatInput",
  props:['value', 'canWrite'],
  data(){
    return {
      
    }
  },
	methods: {
    onInput(val){
      this.$emit('input',val);
    }
  }
}	;
</script>
<style lang="scss" scoped>
  .ChatInput{
    padding:5px;
    
  }
</style>