<template>
	<div class="ChatMessageBot mt-1">
		<div class="row no-gutters">
			<div class="col-1 align-self-end">
				<img :src="GirlBot" class="BotIcon mr-1"/>
			</div>
			<div class="col">
				<ChatMessage>
					<div slot="message">
						<slot name="message"></slot>
					</div>
				</ChatMessage>
			</div>
		</div>
	</div>
</template>
<script>
	import GirlBot from '@/assets/girlbot.svg';
	import ChatMessage from '@/components/tmd/ChatMessage';
	export default {
		name: 'ChatMessageBot',
		props:[],
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

		},
		methods:{

		},
		components:{
			ChatMessage
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.ChatMessageBot{
	
}
.BotIcon{
	max-width: 32px;
	position: relative;
}
</style>