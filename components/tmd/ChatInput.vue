<template>
	<div class="ChatInput row align-items-center m-0">
		<div class="col align-self-center p-0 m-0">
			<div class="ChatInputControlWrapper ml-2">
				<input :disabled="inputDisabled" class="ChatInputControl" :placeholder="inputPlaceholder||''"/>
				<div class="ChatInputEnterButton mr-2">
				<img class="ChatInputEnterButtonRightArrow" :src="RightArrow" >
			</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	import RightArrow from '@/assets/right_arrow.svg';
	export default {
		name: 'ChatInput',
		props:['inputPlaceholder'],
		fetch(){

		},
		data(){
			return{
				RightArrow
			}
		},
		async asyncData(){
			return {
				RightArrow
			}
		},
		computed:{
			inputDisabled(){
				return this.$store.state.tmdChat.inputDisabled
			}
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
.ChatInput{
	height: 100%;
}
.ChatInputControlWrapper{
	position: relative;
}
.ChatInputEnterButton{
	
	background:$color2;
	border-radius: 40px;
    background: #157DF2;
    min-height: 40px;
    display: block;
    position: absolute;
    z-index: 9999999999999999;
    right: 0px;
    width: 40px;
    transform: rotate(-90deg);
    top: 5px;
}
.ChatInputEnterButtonRightArrow{
	position: absolute;
    left: 25%;
    top: 22%;
    width: 20px;
    height: 23px;
}
.ChatInputControl{
	height: 50px;
	width:100%;
	border-radius:25px;
	outline:0px;
	border-color:transparent;
	box-shadow:none;
	padding: 0px 50px 0px 20px;
	border: 1px solid $color2;
}
</style>