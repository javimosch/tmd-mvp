<template>
	<div :class="className">
		<div class="row align-items-center m-0 p-0">
			<div class="col align-self-center p-0 m-0">
				<slot name="message">
				<p>
					Message inside p element
				</p>
				</slot>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'ChatMessage',
		props:['isUser'],
		fetch(){

		},
		async asyncData(){
			return {}
		},
		computed:{
			className(){
				let s = 'ChatMessage mt-1';
				if(this.isUser){
					s+=' isUser';
				}
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
.ChatMessage{
	min-width: 50px;
	max-width: 70%;
	background-color:rgb(229, 228, 234);
	border-radius: 20px;
	display:inline-block;
}
.ChatMessage.isUser{
	background-color:$color2;
	float:right;
}
.ChatMessage.isUser p{
	color:$color6;
	text-align: right;
}
p{
	font-size: 14px;

padding-top: 8px;
padding-bottom: 8px;
padding-right: 12px;
padding-left: 12px;
	
	color:$color5;
	margin:0px;
}
</style>