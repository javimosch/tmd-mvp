<template>
	<div class="BenefitStatusModal">
		<simple-modal-backdrop v-show="true" style="background-color:rgba(0,0,0,0.5)"></simple-modal-backdrop>
  <simple-modal v-show="true"
                class="h-75">
    	<h3 class="text-center">
    		Bourse sur critères sociaux
    		<br>
			CROUS
			<br>
			0 € - 6 500 €
		</h3>
		<div class="row">
			<div class="col-md-12 col-lg-6 mt-5">
				<h4 class="text-center">Formulaire (en cours - 68 %)</h4>
				<img class="mx-auto d-block mt-3" src="http://via.placeholder.com/300x400"/>
			</div>
			<div class="col-md-12 col-lg-6 mt-5">
				<h4 class="text-center">Courrier (en cours - 73 %)</h4>
				<img class="mx-auto d-block mt-3" src="http://via.placeholder.com/300x400"/>
			</div>
		</div>
    </simple-modal>
	</div>
</template>
<script>
import { SimpleModal, SimpleModalBackdrop } from '@/styledComponents/modal';
	export default {
		name: 'BenefitStatusModal',
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
			SimpleModal,
			SimpleModalBackdrop
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.BenefitStatusModal{
	
}
h3{
	color:$color3;
}
</style>