<template>
	<div class="Dashboard">
		<h3 class="text-center">Dash</h3>
		<div class="row justify-content-center">
    <div class="col-2">
      <b-btn size="lg"
             class='w-100 mt-4'
             to="/admin/dash"
             variant="primary">Fields</b-btn>
    </div>
    <div class="col-3">
      <b-btn size="lg"
             class='w-100 mt-4'
             to="/admin/dash"
             variant="primary">Benefits</b-btn>
    </div>
  </div>
	</div>
</template>
<script>
	export default {
		layout: 'app-guess',
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