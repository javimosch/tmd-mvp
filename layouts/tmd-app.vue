<template>
	<div>
		<app-header></app-header>
		<div class="container main">
			<nuxt/>
    </div>
	</div>  
</template>
<script>
import AppHeader from '@/components/tmd/landing/layout/Header'
  export default {
	components:{
      AppHeader
    }
  }
</script>
<style lang="scss" scoped>
</style>