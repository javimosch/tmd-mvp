<template>
	<div>
		
    <div class="row mt-0 p-0 justify-content-center">
      <div class="col-md-auto m-0 p-0 mt-4 align-self-center">
        <div class="row mt-0 p-0 justify-content-center">
          <div class="col-md-auto m-0 p-0 w-50 align-self-center">
          <h2 class="text-center" v-html="title"></h2>
          </div>
        </div>
        <div class="row mt-0 p-0 justify-content-center">
          <div class="col-md-auto m-0 p-0 w-100">
            <b-list-group>
            <slot name="items"></slot> 
          </b-list-group>
          </div>
        </div>
      </div>
      <div class="col-md-auto m-0 p-0 mt-4">
        
        <div class="row mt-0 pl-1 justify-content-center">
          <div class="col-md-auto m-0 p-0 w-50">
          <h2 class="text-center" v-html="'Compréhension de ma question'"></h2>
          </div>
        </div>
        <div class="row mt-0 p-0 justify-content-center">
          <b-list-group>
            <b-list-group-item>
              Mon travail
            </b-list-group-item>
            <b-list-group-item>
              Fin du contrat de travail
            </b-list-group-item>
            <b-list-group-item>
              Démission
            </b-list-group-item>
            <b-list-group-item>
              Rupture conventionnelle
            </b-list-group-item>
            <b-list-group-item>
              Information générale
            </b-list-group-item>
          </b-list-group>  
        </div>
        <div class="row mt-5 p-0 justify-content-center">
          <div class="col-md-auto m-0 p-0 w-50">
          <h2 class="text-center" v-html="'Mes informations'"></h2>
          </div>
        </div>
        <div class="row mt-0 p-0 justify-content-center">
          <b-list-group>
            <b-list-group-item>
              Nothing yet
            </b-list-group-item>
          </b-list-group>  
        </div>
        <div class="row mt-5 p-0 justify-content-center">
          <div class="col-md-auto m-0 p-0 w-50">
          <h2 class="text-center" v-html="'Mes documents'"></h2>
          </div>
        </div>
        <div class="row mt-1 p-0 justify-content-center">
          <b-list-group>
            <b-list-group-item>
              Nothing yet
            </b-list-group-item>
          </b-list-group>  
        </div>
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
h2{
  
}
</style>