<template>
	<div class="CircleWithText" >
		<div class="Circle" :style="style">
			<slot>Bourse étudiante CROUS</slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'CircleWithText',
		props:['bg','color'],
		fetch(){

		},
		async asyncData(){
			return {}
		},
		computed:{
			style(){
				let res = '';
				if(this.bg){
					res+='background-color:'+this.bg+';'
				}
				if(this.color){
					res+='color:'+this.color+';'
				}
				return res;
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
.Circle{
	height: 100px;
  width: 100px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  background: blue;
  color:white;
  padding:10px;
}
.CircleWithText{
	display: block;
	margin:0 auto;
	width:100px; 
}
</style>