<template>
	<div class="HowItWorks">
		<LandingSection :css="'background-color:white;'" class="Parallax " data-rellax-speed="-2">
				<div class="row no-gutters">
					<div class="col-12 col-md-4">
						<a href="#decouvrez-vos-aides">
						<div class="mx-auto d-block">
							<img :src="Image1" class="IconImage IconImage1 mx-auto d-block"/>
						</div>
						<h3 class="Text1 Text text-center">Découvrez vos aides</h3>
						</a>
					</div>
					<div class="col-12 col-md-4">
						<a href="#laissez-nous-faire-les-demarches">
						<div class="mx-auto d-block">
							<img :src="Image3" class="IconImage IconImage2 mx-auto d-block"/>
						</div>
						<h3 class="Text2 Text text-center">Laissez-nous faire les démarches </h3>
						</a>
					</div>
					<div class="col-12 col-md-4">
						<a href="#recevez-l-argent">
						<div class="mx-auto d-block">
							<img :src="Image2" class="IconImage IconImage3 mx-auto d-block"/>
						</div>
						<h3 class="Text3 Text text-center">Recevez l'argent</h3>
						</a>
					</div>
				</div>
		</LandingSection>
	</div>
</template>
<script>
	import {setGlobalAnchorSmoothScroll} from '@/plugins/scrolling'
	import Image1 from '@/assets/howitworks_icon_1.svg';
	import Image2 from '@/assets/howitworks_icon_2.svg';
	import Image3 from '@/assets/howitworks_icon_3.svg';
	import LandingSection from '@/components/tmd/LandingSection';
	import {startParallax} from '@/plugins/parallax'
	export default {
		name: 'HowItWorks',
		props:[],
		fetch(){

		},
		data(){
			return{
				Image1,
				Image2,
				Image3
			}
		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{

		},
		components:{
			LandingSection
		},
		created(){

		},
		mounted(){
			startParallax('.Parallax')
			setGlobalAnchorSmoothScroll();
		}
	}
</script>
<style lang="scss" scoped>
.HowItWorks{
	margin: 20px 0px;
	
	@media only screen and (min-width: 992px) {
	    min-height: 250px;
	 }
	 @media only screen and (min-width: 1400px) {
	    height: unset;
	 }
}
.IconImage{
	max-width: 50px;
	min-height: 100px;
}
.IconImage1{
	max-width: 60px;
}
.IconImage2{
	max-width: 45px;
}
.IconImage3{
}
.Text{
	color:$grey2;
	font-weight: 100;
}

</style>