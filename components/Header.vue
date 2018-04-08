<template>
	<div class="Header mb-4">
		<div>
			<img class="mx-auto d-block mt-2" :src="logo" />
		</div>
		<div v-if="nav" class="nav mx-auto d-block mt-2">
		  <b-nav class="" justified tabs>
		  	<b-nav-item :active="isActive('admin-dash')" to="/admin/dash">Dashboard</b-nav-item>
		  	<b-nav-item :active="isActive('admin-chat')" to="/admin/chat">Chat</b-nav-item>
		    <b-nav-item :active="isActive('admin-fields')" to="/admin/fields">Fields</b-nav-item>
		    <b-nav-item :active="isActive('admin-benefits')" to="/admin/benefits">Benefits</b-nav-item>
		    <b-nav-item :active="isActive('admin-settings')" to="/admin/settings">Settings</b-nav-item>
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
			//await this.$store.dispatch('auth/logout');
			this.$router.push('/admin/login');
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
		max-width:100px;
	}
</style>