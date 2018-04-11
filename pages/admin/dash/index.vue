<template>
	<div class="Dashboard container">
		
		
		<div class="row">
			<div class="col-12">
				<router-link class="text-center d-block"  to="/mockup">View mockups</router-link>
			</div>
			<div class="col-12">
				<b-btn @click="checkLogged">Is logged?</b-btn>
			</div>
			<div class="col-12">
				
			</div>
		</div>
	</div>
</template>
<script>
import ApiLatencyChart from '@/components/ApiLatencyChart';
import {call} from '@/plugins/rpcApi';
	export default {
		middleware:['auth'],
		layout: 'app',
		name: 'Dashboard',
		props:[],
		fetch(){

		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{
			checkLogged(){
				let self = this;
				call('getLoggedUser').then(()=>self.$noty.info('Logged!')).catch(err=>self.$noty.warning(err.message))
			}
		},	
		components:{
			ApiLatencyChart
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.Dashboard{
	
}
</style>