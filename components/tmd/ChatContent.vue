<template>
	<div class="ChatContent scrollbar">
		<div class="row m-0 p-0">
			<div class="col m-2 mr-4 p-0">
				<slot>

					<div v-show="shouldShowMessagesSample">
				<ChatMessageBot>
					<p slot="message">
						Bonjour, je m’appelle Chloé ! 
Je vais t’aider à trouver toutes les aides financières auxquelles tu as droit

					</p>
				</ChatMessageBot>

				<ChatMessageBot>
					<p slot="message">
						D’ailleurs, comment t’appelles-tu ?
					</p>
				</ChatMessageBot>
				


				<ChatMessageUser :isUser="true">
					<p slot="message">
						Julie
					</p>
				</ChatMessageUser>

				<ChatMessageBot>
					<p slot="message">
						Enchantée Julie ! Très joli prénom d’ailleurs ;)
					</p>
				</ChatMessageBot>
			</div>
				</slot>

				
					<slot name="options"></slot>
				

			</div>
		</div>
	</div>
</template>
<script>
	import ChatMessageBot from '@/components/tmd/ChatMessageBot';
	import ChatMessageUser from '@/components/tmd/ChatMessageUser';
	export default {
		name: 'ChatContent',
		props:['showMessagesSample'],
		fetch(){

		},
		async asyncData(){
			return {}
		},
		computed:{
			shouldShowMessagesSample(){
				return this.showMessagesSample!==undefined?this.showMessagesSample:true
			}
		},
		methods:{

		},
		components:{
			ChatMessageBot,
			ChatMessageUser
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.ChatContent{
	overflow: auto;
	max-height: 200px;
	@media only screen and (min-width: 768px) {

	}
	@media only screen and (min-width: 992px) {
		min-height: 500px;
		max-height: 500px;
    	margin-bottom: 80px;
	 }
	 
}
</style>