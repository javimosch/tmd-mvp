<template>
	<div>
		
    <div class="row mt-3 p-5 justify-content-center">
      <div class="col-md-auto m-0 p-0">
        <h2 class="text-center" v-html="title"></h2>
        <b-list-group>
          <slot name="items"></slot> 
        </b-list-group>
      </div>
    </div>


	</div>
</template>
<script>

export default {
  name:"ChatToolV1",
  props:['title'],
  data(){
    return {
      
    }
  },
	components: {
    
  }
}	;
</script>
<style lang="scss" scoped>

</style>