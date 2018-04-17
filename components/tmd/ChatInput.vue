<template>
	<div class="ChatInput row align-items-center m-0">
		<div class="col align-self-center p-0 m-0">
			<div class="ChatInputControlWrapper ml-2">
				<input :disabled="inputDisabled" class="ChatInputControl" :placeholder="inputPlaceholder||''"/>
			</div>
		</div>
		<div class="col-2 align-self-center p-0 m-0">
			<div class="ChatInputEnterButton mr-2">
				<img class="ChatInputEnterButtonRightArrow" :src="RightArrow" >
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

}
.ChatInputEnterButton{
	border-radius:0px 10px 10px 0px;
	background:$color3;
	min-height: 50px;
	position: relative;
}
.ChatInputEnterButtonRightArrow{
	position: absolute;
    left: 37%;
    top: 30%;
    width: 20px;
}
.ChatInputControl{
	height: 50px;
	width:100%;
	border-radius:10px 0px 0px 10px;
	outline:0px;
	border-color:transparent;
	box-shadow:none;
	padding: 0px 20px;
	border: 1px solid $color3;
}
</style>