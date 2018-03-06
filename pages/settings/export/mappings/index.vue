<template>
	<div class="container mt-5">
		<div class="row">
		    <div class="col-md-12 m-0 p-0">
		    	<b-breadcrumb :items="breadcrumbs"/>
			</div>
			<div class="col-md-12 m-0 p-0 mb-2 mt-5">
				<b-button-group class="d-block">
			      <b-btn  @click="details()" size="lg" variant="primary">New</b-btn>
			      <b-button class="ml-2" variant="primary" size="lg" to="/settings/export/products">Export Products</b-button>
		    	</b-button-group>
		    </div>
			<div class="col-md-12 m-0 p-0">
				<p class="title_block">Mappings</p>
		    	<b-table striped hover :items="transformedItems" :fields="fields" responsive stacked="lg" small
		    	@row-clicked="rowClick"
		    	>
		    	</b-table>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		components: {

		},
		layout: 'app',
		computed:{
			items(){
		      return this.$store.state.config && this.$store.state.config.mappings;
		    }
		},
		methods: {
			rowClick(item){
				this.details(item.name);
			},
			details(name){
				this.$router.push({
					name:"settings-export-mappings-name",
					params:{
						name:name||'-1'
					}
				});
			},
			transformItems() {
				let arr = [];
				this.items.forEach(i => arr.push(Object.assign({}, i)));
				this.transformedItems = arr;
			}
		},
		created(){
			this.$store.dispatch('config/fetch');
		},
		mounted() {
			this.transformItems();
		},
		watch: {
			items() {
				this.transformItems();
			}
		},
		data() {
			return {
				fields: ['name'],
				transformedItems: [],
				breadcrumbs: [{
					text: 'Dashboard',
					to: '/dashboard'
				}, {
					text: 'Settings',
					to: '/settings'
				}, {
					text: 'Export',
					to: '/settings'
				}, {
					text: 'Mappings',
					active: true
				}]
			}
		}
	}
</script>
<style lang="scss" scoped>

</style>