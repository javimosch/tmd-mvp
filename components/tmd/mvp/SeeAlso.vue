<template>
	<div>
		
    <div class="row mt-3 p-5 justify-content-center">
      <div class="col-md-auto m-0 p-0">
        <h2 class="text-center" v-html="title"></h2>
        <b-list-group>
          <b-list-group-item 
            v-for="item in questions" 
            :key="item.code" 
            @click="routeTo(item.path)" 
            v-html="item.title" 
            button>
               
          </b-list-group-item>
        </b-list-group>
      </div>
    </div>


	</div>
</template>
<script>

export default {
  name:"SeeAlso",
  props:['title','questions'],
  data(){
    return {
      
    }
  },
	components: {
    
  },
  methods:{
    routeTo(p){
      this.$router.push({
        path: p
      });
    }
  }
}	;
</script>
<style lang="scss" scoped>
  .list-group{
    min-width: 300px;
  }
</style>