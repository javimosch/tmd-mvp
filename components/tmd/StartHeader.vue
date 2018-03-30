<template>
	<div class="StartHeader">
		<div class="row m-0 p-0 justify-content-center">
			<div class="col-12 align-self-center mt-0">
				<h1 class="text-center mx-auto d-block mt-5">Trouvez toutes les aides financières auxquelles vous avez droit
</h1>
			</div>
			<div class="col-12 align-self-center mt-0">
				<b-btn class="mx-auto d-block mt-4" variant="success" size="lg">Commencer</b-btn>
			</div>
			<div class="col-12 align-self-center mt-0">
			
			</div>
		</div>
		<div class="bottom" data-rellax-speed="-2">
			<div class="row m-0 p-0 h-100 justify-content-center">
				<div class="col align-self-start mt-0">
					<CircleWithText></CircleWithText>
				</div>
				<div class="col align-self-center mt-0">
					<CircleWithText bg="rgb(233, 153, 154)" color="white"></CircleWithText>
				</div>
				<div class="col align-self-end mt-0">
					<CircleWithText class="asd" data-rellax-speed="-1" bg="rgb(253, 170, 76)" color="white"></CircleWithText>
				</div>
				<div class="col align-self-center mt-0">
					<CircleWithText bg="rgb(233, 153, 154)" color="white"></CircleWithText>
				</div>
				<div class="col align-self-start mt-0">
					<CircleWithText class="asd" data-rellax-speed="1"></CircleWithText>
				</div>
				<div class="col align-self-center mt-0">
					<CircleWithText bg="rgb(233, 153, 154)" color="white"></CircleWithText>
				</div>
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
			var rellax = new Rellax('.bottom');
			rellax = new Rellax('.asd');
		}
	}
</script>
<style lang="scss" scoped>
.bottom{
	position: absolute;
	width: 100%;
	height: 170px;
	bottom: 20px;
}
.StartHeader{
	position: absolute;
	top:0px;
	left:0px;
	width: 100%;
	height: 100%;
	z-index: 9999;
}
h1{
	max-width:500px;
	background: mediumseagreen;
    line-height: 45px;
    color: white;
    padding: 20px;
}
button{
	background: mediumseagreen;
	font-size:30px;
	border-radius: 20px;
}
button:hover{
	background: darkseagreen;
}
</style>