<template>
	<div class="Dashboard container">
		<router-link class="text-center d-block"  to="/mockup">View mockups</router-link>
		<b-btn @click="checkLogged">Is logged?</b-btn>
	</div>
</template>
<script>
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