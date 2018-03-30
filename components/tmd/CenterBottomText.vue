<template>
	<div class="CenterBottomText">
		<div class="row m-0 p-0">
			<div class="col">
				<h1 class="text-center" :style="h1Style"><slot></slot></h1>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'CenterBottomText',
		props:['color'],
		fetch(){

		},
		async asyncData(){
			return {}
		},
		computed:{
			h1Style(){
				if(this.color){
					return 'color:'+this.color+';'
				}else{
					return '';
				}
			}
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
.CenterBottomText{
	width:100%;
}
h1{
	margin-top:300px;
	font-size: 25px;
	color:$color2;
	padding-bottom:150px;
}
</style>