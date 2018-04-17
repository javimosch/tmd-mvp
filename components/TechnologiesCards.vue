<template>
	<div class="TechnologiesCards container">
		<div class="row justify-content-center align-items-center p-5">
      <div class="col align-self-center">
       <b-card title="Azure"
          img-src="http://via.placeholder.com/200x200"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 mx-auto d-block">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Read more</b-button>
  </b-card>
      </div>
      <div class="col align-self-center">
        <b-card title="Perl"
          img-src="http://via.placeholder.com/200x200"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 mx-auto d-block">
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Read more</b-button>
  </b-card>
      </div>
    </div>
	</div>
</template>
<script>
	export default {
		name: 'TechnologiesCards',
		props:[],
		fetch(){

		},
		data(){
			return{}
		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{

		},
		components:{

		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.TechnologiesCards{
	
}
</style>