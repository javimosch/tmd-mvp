<template>
	<div class="Chat pt-4">
		<ChatContent></ChatContent>
		<ChatBottom></ChatBottom>
	</div>
</template>
<script>
	import ChatContent from '@/components/tmd/ChatContent';
	import ChatBottom from '@/components/tmd/ChatBottom';
	export default {
		name: 'Chat',
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
			ChatBottom,
			ChatContent
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.Chat{
	background-color:white;
	min-width:300px;
	min-height: 300px;
	position: relative;
	@media only screen and (min-width: 992px) {
	    min-height: 500px;
	 }
}
</style>