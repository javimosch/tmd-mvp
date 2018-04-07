<template>
	<div class="MockupPage">
		<mHeader></mHeader>


		<div v-show="nro=='1'">
			<StartHeader></StartHeader>
		  	<two-sides-div>
				<div slot="left" class="row row align-items-start m-0 p-0">
					<CenterBottomText color="#0A45B1">1. Répondez à quelques questions</CenterBottomText>
				</div>
				<div slot="right">
					<CenterBottomText >2. On s’occupe de tout,<br> vous recevez l’argent</CenterBottomText>
				</div>
			</two-sides-div>
		</div>

		<div v-show="nro=='2'">
		  	<two-sides-div>
				<div slot="left" class="row row align-items-start m-0 p-0">
					<div class="col align-self-center m-0 p-0">
						<chat></chat>
					</div>
				</div>
				<div slot="right">
					<CenterBottomText v-html="nro">2. On s’occupe de tout,<br> vous recevez l’argent</CenterBottomText>
				</div>
			</two-sides-div>
		</div>


		<div class="row mt-5 p-5 justify-content-center">
      <div class="col-lg-12 m-0 mt-5 p-0">
        <h2 class="text-center">Nos partenaires</h2>
      </div>
      <div class="col-lg-auto m-0 p-0 mt-4">
        <div class="partner">
          <img class="parner_logo" src="~/assets/partners/logo_pantheon_sobornne.jpg"/>
        </div>
      </div>
      <div class="col-lg-auto m-0 p-0 mt-4">
        <div class="partner">
          <img class="parner_logo" src="~/assets/partners/logo_ministere_justice.png"/>
        </div>
      </div>
    </div>


		<app-footer></app-footer>
	</div>
</template>
<script>
	import StartHeader from '@/components/tmd/StartHeader';
	import CenterBottomText from '@/components/tmd/CenterBottomText';
	import Chat from '@/components/tmd/Chat';
	import MHeader from '@/components/tmd/Header';
	import TwoSidesDiv from '@/components/tmd/TwoSidesDiv';
	import AppFooter from '@/components/tmd/landing/layout/Footer'
	export default {
		name: 'MockupPage',
		props:[],
		fetch(){

		},
		async asyncData(){
			return {}
		},
		computed:{
			nro(){
				return this.$store.state.route && this.$store.state.route.params && this.$store.state.route.params.nro;
			}
		},
		methods:{

		},
		components:{
			StartHeader,
			Chat,
			MHeader,
			TwoSidesDiv,
			CenterBottomText,
			AppFooter
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.parner_logo{
  width: 200px;
  margin:0 auto;
  display:block;
}
</style>