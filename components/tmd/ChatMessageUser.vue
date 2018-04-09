<template>
	<div class="ChatMessageUser">
		<div class="row no-gutters">
			<div class="col">
				<ChatMessage :isUser="true">
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
		name: 'ChatMessageUser',
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
.ChatMessageUser{
	
}
.BotIcon{
	max-width: 32px;
	position: relative;
}
</style>