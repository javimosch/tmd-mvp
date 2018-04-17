<template>
	<div class="ChatMessageUser">
		<div class="row no-gutters">
			<div class="col">
				<ChatMessage :isUser="true">
					<div slot="message">
						<div slot="message">
							<div>
								<div v-show="!isLoading">
									<slot name="message"></slot>
								</div>
								<LoadingDots v-show="isLoading"></LoadingDots>
							</div>
						</div>
					</div>
				</ChatMessage>
			</div>
		</div>
	</div>
</template>
<script>
	import GirlBot from '@/assets/girlbot.svg';
	import ChatMessage from '@/components/tmd/ChatMessage';
	import LoadingDots from '@/components/LoadingDots';
	export default {
		name: 'ChatMessageUser',
		props:['loading'],
		fetch(){

		},
		data(){
			return{
				GirlBot
			}
		},
		async asyncData(){
			return {
				GirlBot
			}
		},
		computed:{
			isLoading(){
				return this.loading!==undefined?this.loading:false
			}
		},
		methods:{

		},
		components:{
			ChatMessage,
			LoadingDots
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.ChatMessageUser{
	
}
.BotIcon{
	max-width: 32px;
	position: relative;
}
</style>