<template>
	<header class="container">
		<nav class="navbar navbar-light bg-light">
		  <router-link class="navbar-brand" to="/">
		    
		    	<img :src="Logo" class="LogoImage"/>
			
		  </router-link>
		</nav>
	</header>  
</template>
<script>
import Logo from '@/assets/logo.svg'
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
	padding:0px;
}
.inverse{
	color:$color3;
	background-color:$color1;
	padding-right:2px;
	padding-left:2px;
	
}
.LogoImage{
	max-width:100px;
	padding:0px;
}
.logo{
	padding:10px 0px;
	color:$color6;
	background-color:$color3;
}
</style>