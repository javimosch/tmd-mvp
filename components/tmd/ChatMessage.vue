<template>
	<div class="ChatMessage">
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

		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.ChatMessage{
	min-width: 150px;
	max-width: 400px;
	background-color:rgb(229, 228, 234);
	border-radius: 20px;
	display:inline-block;
}
p{
	padding:20px;
	color:$color5;
	margin:0px;
}
</style>