<template>
	<div class="HowWorksSection container pb-5">

			<div class="row m-0 p-0 h-100 justify-content-center asd" data-rellax-speed="0">
				<div class="col col-md-6 col-lg-3 align-self-start mt-4">
					<CircleWithText 
					size="200px" color="rgb(229, 100, 200)" bg="white" border="1px solid rgb(229, 100, 200)">
						1. 
<br>
Répondez à quelques questions

					</CircleWithText>

					


				</div>
				<div class="col col-md-6 col-lg-3 align-self-start mt-4">
					<CircleWithText size="200px" color="rgb(229, 100, 200)" bg="white" border="1px solid rgb(229, 100, 200)">
						2. 
<br>
Découvrez les aides auxquelles vous avez droit

					</CircleWithText>
				</div>

				<div class="col col-md-6 col-lg-3 align-self-start mt-4">
					<CircleWithText size="200px" color="rgb(229, 100, 200)" bg="white" border="1px solid rgb(229, 100, 200)">
						3. 
<br>
On s’occupe de toutes les démarches à votre place

					</CircleWithText>
				</div>

				<div class="col  col-md-6 col-lg-3 align-self-start mt-4">
					<CircleWithText size="200px" color="rgb(229, 100, 200)" bg="white" border="1px solid rgb(229, 100, 200)">
						4. 
<br>
Recevez l’argent directement sur votre compte

					</CircleWithText>
				</div>
			</div>
	</div>
</template>
<script>
import CircleWithText from '@/components/tmd/CircleWithText';
	export default {
		name: 'HowWorksSection',
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
			CircleWithText
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.HowWorksSection{
	min-height: 350px;
}
</style>