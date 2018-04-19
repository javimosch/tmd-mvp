<template>
	<div class="StartHeader">
		<div class="row m-0 p-0 justify-content-center">
			<div class="col-12 align-self-center mt-0 mb-4">
				<h1 class="text-center mx-auto d-block ">Trouvez toutes les aides auxquelles vous avez droit
</h1>
			</div>
			<div class="col-12">
				<slot></slot>
			</div>



			<div class="col-12 align-self-center mt-0" v-if="false">
				<b-btn to="/mockup/2" class="mx-auto d-block mt-4" variant="success" size="lg">Commencer</b-btn>
			</div>

			<div class="col-12 align-self-center mt-1 mb-5" v-if="true">
				<img :src="ArrowDown" class="ArrowDown pulse animated infinite mt-5 mx-auto d-block" />
			</div>


			
			

		</div>
		
	</div>
</template>
<script>
import ArrowDown from '@/assets/arrows/arrow-down.svg'
import CircleWithText from '@/components/tmd/CircleWithText';
	
	export default {
		name: 'StartHeader',
		props:[],
		fetch(){

		},
		data(){
			return{
				ArrowDown
			}
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
	
}
.ArrowDown{
	max-width: 30px;
}
h1{
	max-width:992px;
    line-height: 40px;
    font-size:35px;
    color: $color3;
    padding: 15px;
    margin:0px;
    font-weight: 100;
}
a{
	max-width: 250px;
	background: mediumseagreen;
	font-size:30px;
	border-radius: 20px;
}
a:hover{
	background: darkseagreen;
}
</style>