<template>
	<div class="MockupPage">
		<mHeader></mHeader>
		<two-sides-div>
			<div slot="left" class="row row align-items-start m-0 p-0">
				<div class="col align-self-center m-0 p-0">
					<chat></chat>
				</div>
			</div>
			<div slot="right">
				<CenterBottomText>2. On s’occupe de tout,<br> vous recevez l’argent</CenterBottomText>
			</div>
		</two-sides-div>
	</div>
</template>
<script>
	import CenterBottomText from '@/components/tmd/CenterBottomText';
	import Chat from '@/components/tmd/Chat';
	import MHeader from '@/components/tmd/Header';
	import TwoSidesDiv from '@/components/tmd/TwoSidesDiv';
	export default {
		name: 'MockupPage',
		props:[],
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
			Chat,
			MHeader,
			TwoSidesDiv,
			CenterBottomText
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
</style>