<template>
	<div class="Dashboard container">
		
		
		<div class="row">
			
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
			
		},	
		components:{
			ApiLatencyChart
		},
		created(){

		},
		mounted(){
			this.$router.push('/mockup')
		}
	}
</script>
<style lang="scss" scoped>
.Dashboard{
	
}
</style>