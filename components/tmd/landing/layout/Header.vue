<template>
	<header class="container">
		<nav class="navbar navbar-light bg-light">
		  <router-link class="navbar-brand" to="/">
		    <span class="p-0 logo"><span class="inverse">Tous</span> Mes Droits</span>
		  </router-link>
		</nav>
	</header>  
</template>
<script>
  export default {

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
.logo{
	padding:10px 0px;
	color:$color6;
	background-color:$color3;
}
</style>