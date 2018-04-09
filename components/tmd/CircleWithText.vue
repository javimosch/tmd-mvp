<template>
	<div class="CircleWithText" :style="CircleWithTextStyle">
		<div class="Circle" :style="CircleStyle">
			<slot>Bourse étudiante CROUS</slot>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'CircleWithText',
		props:['bg','color','size','border'],
		fetch(){

		},
		async asyncData(){
			return {}
		},
		computed:{
			CircleWithTextStyle(){
				let style = '';
				if(this.size){
					style+=` width:${this.size};`;
				}
				return style;
			},
			CircleStyle(){
				let style = '';
				if(this.bg){
					style+='background-color:'+this.bg+';'
				}
				if(this.color){
					style+='color:'+this.color+';'
				}
				if(this.border){
					style+='border:'+this.border+';'
				}
				if(this.size){
					style+=` width:${this.size};`;
					style+=` height:${this.size};`;
				}
				return style;
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