<template>
	<header class="container">
		<nav class="navbar navbar-light bg-light">
		  <router-link class="navbar-brand" to="/">
		    <i class="fas fa-clock clock"></i>
		    <span class="pl-3">Tous Mes Droits</span>
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
.clock{
	color: $primary-color;
}
</style>