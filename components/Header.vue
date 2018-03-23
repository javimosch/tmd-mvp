<template>
	<div>
		<div>
			<img class="mx-auto d-block mt-5" :src="logo" />
		</div>
		<div v-if="nav" class="nav mx-auto d-block mt-5">
		  <b-nav class="" justified tabs>
		  	<b-nav-item :active="isActive('dashboard')" to="/dashboard">Dashboard</b-nav-item>
		    <b-nav-item :active="isActive('settings')" to="/settings">Settings</b-nav-item>
		    <b-nav-item @click="logout()">Logout</b-nav-item>
		  </b-nav>
		</div>
	</div>
</template>
<script>
	import Logo from '@/assets/logo.png'
	

export default {
	props:['nav'],
	data () {
		return {
			logo: Logo
		}
	},
	methods:{
		async logout(){
			await this.$store.dispatch('auth/logout');
			this.$router.push('/login');
		},
		isActive(n){
			return this.$store.state.route && this.$store.state.route.name == n;
		}
	}
}
</script>
<style lang="scss" scoped>
	.nav{
		max-width:800px
	}
	img{
		max-width:200px;
	}
</style>