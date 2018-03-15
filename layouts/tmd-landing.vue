<template>
	<div>
		<app-header></app-header>
		<div class="container main">
			<nuxt/>
    </div>
    <app-footer></app-footer>
	</div>  
</template>
<script>
import AppHeader from '@/components/tmd/landing/layout/Header'
import AppFooter from '@/components/tmd/landing/layout/Footer'
  export default {
	components:{
      AppHeader,
      AppFooter
    }
  }
</script>
<style lang="scss" scoped>
.main{
  /*
  background-image:url(/hero-background-fc97695d.svg);
  background-size:96%;
  background-repeat:no-repeat;
  background-position-y:120px;
  
  */
  min-height:700px;
  min-width:100%;
}
</style>