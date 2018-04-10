<template>
	<div class="OrderCheckoutLine">
			

		<div class="row justify-content-center">
			<div class="col-md-12 col-lg-2 mt-0">
				 <no-ssr>
				<toggle-button class="float-lg-right" :value="checked" color="#50D567" :sync="true" :labels="false"/>
			</no-ssr>
			</div>
			<div class="col-md-12 col-lg-2 mt-0">
				<p class="text-right font-weight-bold" ><span v-html="amount">3 500</span> €</p>
			</div>
			<div class="col-md-12 col-lg-5 mt-0" >
				<p v-html="text">Bourse sur critères sociaux (CROUS)</p>
			</div>
			<div class="col-md-12 col-lg-3 mt-0">
				<p class="text-right font-weight-bold" ><span v-html="price">8</span> €</p>
			</div>
		</div>


	</div>
</template>
<script>
	export default {
		name: 'OrderCheckoutLine',
		props:['checked','amount','text','price'],
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

		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.OrderCheckoutLine{
	
}
</style>