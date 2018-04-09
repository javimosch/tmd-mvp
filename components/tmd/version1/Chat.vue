<template>
	<div class="Chat pt-4">
		<ChatContent></ChatContent>
		<ChatBottom></ChatBottom>
		<div class="row" v-show="isDevelopment">
			<div class="col-12 mt-4">
				
			</div>
		</div>
	</div>
</template>
<script>
	import tmdChat from '@/plugins/tmdChat';
	import ChatContent from '@/components/tmd/version1/ChatContent';
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
			isDevelopment(){
				return !process.env.isProduction
			}
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