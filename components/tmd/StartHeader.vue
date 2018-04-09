<template>
	<div class="StartHeader">
		<div class="row m-0 p-0 justify-content-center">
			<div class="col-12 align-self-center mt-0">
				<h1 class="text-center mx-auto d-block mt-lg-5">Trouvez toutes les aides financières auxquelles vous avez droit
</h1>
			</div>
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
			<div class="col-12 align-self-center mt-0">
				<b-btn to="/mockup/2" class="mx-auto d-block mt-4" variant="success" size="lg">Commencer</b-btn>
			</div>
			<div class="col-12 align-self-center mt-0">
			
			</div>
		</div>
		
	</div>
</template>
<script>
import CircleWithText from '@/components/tmd/CircleWithText';
	
	export default {
		name: 'StartHeader',
		props:[],
		fetch(){

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

.StartHeader{
	position: absolute;
	top:0px;
	left:0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
}
h1{
	max-width:700px;
    line-height: 45px;
    color: $color3;
    padding: 20px;
}
a{
	max-width: 200px;
	background: mediumseagreen;
	font-size:30px;
	border-radius: 20px;
}
a:hover{
	background: darkseagreen;
}
</style>