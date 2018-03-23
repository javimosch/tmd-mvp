<template>
	<header class="container">
		<nav class="navbar navbar-light bg-light">
		  <router-link class="navbar-brand" to="/">
		    <div v-if="false">
		    	<span class="p-0 logo"><span class="inverse">Tous</span> Mes Droits</span>
		    </div>
		    <img :src="Logo" class="LogoImage"/>
		  </router-link>
		</nav>
	</header>  
</template>
<script>
import Logo from '@/assets/logo.png'
  export default {
  	data(){
  		return {
  			Logo
  		}
  	}
  }
</script>
<style lang="scss" scoped>
.navbar{
	background-color:transparent!important;
}
.inverse{
	color:$color3;
	background-color:$color1;
	padding-right:2px;
	padding-left:2px;
	
}
.LogoImage{
	max-width:150px;
}
.logo{
	padding:10px 0px;
	color:$color6;
	background-color:$color3;
}
</style>