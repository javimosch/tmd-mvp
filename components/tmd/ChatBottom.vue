<template>
	<div class="ChatBottom">
		<ChatInput v-show="!hideInput" :inputPlaceholder="inputPlaceholder"></ChatInput>
		<slot name="bottom">
		</slot>
	</div>
</template>
<script>
import ChatInput from '@/components/tmd/ChatInput';
	export default {
		name: 'ChatBottom',
		props:['inputPlaceholder','hideInput'],
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
			ChatInput
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.ChatBottom{
	bottom:0px;
	position:absolute;
	width:100%;
	height:100px;
	background-color:transparent;
}
</style>