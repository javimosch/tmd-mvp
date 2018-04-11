<template>
<div class="Header">
	<div class="container">
		<div class="row">
			<div class="col Logo">
        <router-link class="navbar-brand" to="/">
				  <img :src="LogoImage" class="LogoImage"/>
        </router-link>
			</div>
		</div>
	</div>
  	<hSidebar></hSidebar>
</div>

</template>

<script>
import LogoImage from '@/assets/logo.png'
import HSidebar from '@/components/tmd/HeaderSidebar';
export default {
  name: 'Header',
  props: [],
  fetch() {},
  data(){
  	return{
  		LogoImage
  	}
  },
  async asyncData() {
    return {
    }
  },
  computed: {
  	
  },
  methods: {

  },
  components: {
  	HSidebar
  },
  created() {

  },
  mounted() {
  	
  }
}

</script>

<style lang="scss" scoped="">

.Logo{
	background: white;
}
.LogoImage{
	max-width: 100px;
}
.Header {
     
}


</style>
