<template>
	<div class="ChatOptionButton">
		<b-btn variant="primary" size="xs" class="float-right mr-2 mt-2">
			<slot></slot>
		</b-btn>
	</div>
</template>
<script>
	
	export default {
		name: 'ChatOptionButton',
		props:[],
		fetch(){

		},
		data(){
			return{
				
			}
		},
		async asyncData(){
			return {
				
			}
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
.ChatOptionButton{
	
}
button{
	border-radius: 10px;
	background-color:$color3;
	color:$color6;
	padding:20px;
	margin:0px;
}
</style>