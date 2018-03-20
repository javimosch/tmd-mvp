<template>
	<div>
		
    <div class="row mt-3 p-5">
      <div class="col-md-12 m-0 p-0">
        <h2 class="text-center" v-html="'Debug view'"></h2>
        <b-list-group>
          <textarea class="list-group-item" 
            v-html="jsonData">
          </textarea>
        </b-list-group>
      </div>
    </div>


	</div>
</template>
<script>

export default {
  name:"DebugScreen",
  props:['data'],
  data(){
    return {
      
    }
  },
	components: {
    
  },
  computed:{
    jsonData(){
      return this.data && JSON.stringify(this.data, null,"\t");
    }
  },
  methods:{
    
  }
}	;
</script>
<style lang="scss" scoped>
  .list-group{
    min-width: 300px;
  }
</style>