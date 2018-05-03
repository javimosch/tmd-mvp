<template>
	<div :class="sectionClass" :style="sectionStyle">
		<div class="row no-gutters">
			<div class="col-12" v-show="title">
				
					<h1 class="text-center title p-4 mt-4" :style="titleStyleComputed" v-html="title"></h1>
				
			</div>
			<div class="col-12" v-show="text">
				<p v-html="text"></p>
			</div>
		</div>
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'LandingSection',
		props:['title','text','css','inverted','titleStyle'],
		fetch(){

		},
		data(){
			return{}
		},
		async asyncData(){
			return {}
		},
		computed:{
			titleStyleComputed(){
				return `${this.titleStyle?`${this.titleStyle}`:''}`
			},
			sectionClass(){
				return `LandingSection ${this.inverted?'inverted':''}`
			},
			sectionStyle(){
				var s = this.css?this.css:'';
				return s;
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
.LandingSection{
	background-color:$color5;
}
.LandingSection.inverted{
	background-color:$color3;
}
.title{
	font-size:40px;
	color:$color2;
}
.inverted .title{
	color:$color6;
}
</style>