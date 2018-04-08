<template>
	<div class="Chat">
		<TwoSidesDiv rightBackgroundColor="#EEEEEE">
				<div slot="left" class="row row align-items-start m-0 p-0">
					<div class="col align-self-center m-0 p-0">
						<ChatOne></ChatOne>
					</div>
				</div>
				<div slot="right">
					<CenterBottomText color="#212431" size="20px" top="150px" lineHeight="35px">
						<p>
							Discutez avec Chloé !
<br>
Elle trouvera toutes les aides financières 
<br>
auxquelles vous avez droit.
<br>
Elle fera même les démarches pour vous ;)

						</p>
					</CenterBottomText>
				</div>
			</TwoSidesDiv>
	</div>
</template>
<script>
	import TwoSidesDiv from '@/components/tmd/TwoSidesDiv';
	import ChatOne from '@/components/tmd/Chat';
	import CenterBottomText from '@/components/tmd/CenterBottomText';
	export default {
		layout:'app',
		name: 'Chat',
		props:[],
		fetch(){

		},
		data(){
			return{}
		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{

		},
		components:{
			TwoSidesDiv,
			ChatOne,
			CenterBottomText
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.Chat{
	
}
</style>