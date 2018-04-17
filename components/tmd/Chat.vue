<template>
	<div class="Chat pt-4">
		<ChatContent :showMessagesSample="showMessagesSample">
			<slot>
			</slot>
			<div slot="options" >
				<slot name="options"  >
				</slot>
			</div>
			
		</ChatContent>
		<ChatBottom :inputPlaceholder="inputPlaceholder" :hideInput="hideInput">
			<div slot="bottom">
				<slot name="bottom">
				</slot>
			</div>
		</ChatBottom>
	</div>
</template>
<script>
	import ChatContent from '@/components/tmd/ChatContent';
	import ChatBottom from '@/components/tmd/ChatBottom';
	export default {
		name: 'Chat',
		props:['inputPlaceholder','hideInput','showMessagesSample'],
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
	    min-height: 400px;
	 }
	 
}
</style>