<template>
	<div class="ChatMessageBot">
		<div class="row no-gutters">
			<div class="col-1 align-self-end">
				<img :src="GirlBot" class="BotIcon mr-1"/>
			</div>
			<div class="col">
				<ChatMessage>
					<div slot="message">
						<div>
							<div v-show="!isLoading">
								<slot  name="message"></slot>
							</div>
							<LoadingDots v-show="isLoading"></LoadingDots>
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
		name: 'ChatMessageBot',
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
.ChatMessageBot{
	-vendor-animation-duration: 0.5s;
}
.BotIcon{
	max-width: 32px;
	position: relative;
}
</style>