<template>
	<div class="container mt-5">
		<div class="row">
		    <div class="col-md-12 m-0 p-0">
		    	<b-breadcrumb :items="breadcrumbs"/>
			</div>
		</div>
		
		<div class="row mt-5 mb-5 " >
			<div class="col-md-12 m-0 p-0 pb-2">
	    		<b-btn variant="primary" size="lg" class="ml-2 float-none  d-block float-sm-right" @click="save()">Save changes</b-btn>

	    		<b-btn v-if="isEdit" variant="warning" size="lg" class="float-none mx-auto d-block float-sm-right" @click="handleRemove()">Remove</b-btn>
	    	</div>
	    	<div class="col-md-6 m-0 p-0">
	    		<label>Name</label>
	    		<b-form-input class="text-left" size="lg" placeholder="Mapping name" type="text" ref="name" v-model="name" :state="name!=''"/>
	    	</div>
	    </div>

	    <div class="row align-items-center">
	    	<div class="col-md-6 m-0 p-0">
	    		<p>The follow mapping configuration will determine how the data is exported.</p>
	    		<p>First, select a product for testing.</p>
	    	</div>
	    	<div class="col-md-6 m-0 p-0">
	    		<remote-select 
	    		class="float-none float-md-right"
	    		id="products"
	    		:cache="true"
	    		placeholder="Ref or Zipcode" 
			    source="products.searchSelection"
			    dispatch="products/remoteSelectFetch"
			    defaultValue="75010"
			    :formatFunction="formatProductSelectRow"
			    :parseInt="true"
			    @onChange="onProductSelectChange"
			    @onClear="(()=>product=null)"
			    ></remote-select>
	    	</div>
	    </div>
		    
	
		<div class="row mt-5" v-show="product">
	    	<div class="col-md-6 m-0 p-0 pr-2">

	    		
			    <p>
				    	You can check the current product object structure here.
				    	<br>
				    	This is how our database record looks like.
				    </p>
			   
	    	</div>
	    	
	    	<div class="col-md-6 m-0 p-0 pl-2">
	    		
	    		 
	    	</div>
	    </div>	
	    <div class="row" v-show="product">

	    	<div class="col-md-12 m-0 p-0">	
	    		<json-viewer minHeight="600"  :data="product"></json-viewer>
	    	</div>
	    	
	    	<div class="col-md-12 mt-5 m-0 p-0 pl-2" v-show="product && isEdit"

	    	>
	    		<p>
			    	Now, you can add remote columns and map them using basic javascript.
				    </p>
	    		<b-table striped hover :items="columns" :fields="columnsTableFields" responsive stacked="md" small
		    		@row-clicked="showColumnItemDetails"
		    		>


		    		<template slot="delete_column" slot-scope="row">
				      <b-button size="sm" @click.stop="deleteColumn(row.item)" 
				      class="float-right">
				      <i class="far fa-trash-alt"></i> 
				      </b-button>
				    </template>

				    	<template slot="row-details" slot-scope="row">
					      <b-card>
					          <export-mapping-column
					          :item="row.item"
					          :product="product"
					          :mappingName="name"
					          @onDelete="row.toggleDetails"
					          @onSave="onColumnSave(row)"
					          @onCancel="row.toggleDetails"
					          ></export-mapping-column>
					      </b-card>
					    </template>
		    		</b-table>
		    		<b-button @click="addColumn">Add</b-button>
	    	</div>

	    	<div class="col-lg-12 col-md-12 mt-5 m-0 p-0 pl-2" v-show="product && !isEdit">
	    		<p>Before preceding, save the changes.</p>
	    	</div>
	    	
	    	<div class="col-lg-6 col-md-12 mt-5 m-0 p-0 pl-2" v-show="product && isEdit">
	    		<h3>Ordering</h3>
	    		<ordenable-list 
	    			:data="columns" 
	    			:format="((e)=>e.name)" 
	    			forKey="name"
	    			@onDragEnd="onDragEnd">
	    		</ordenable-list>

	    	</div>

	    	<div class="col-lg-6 col-md-12 mt-5 m-0 p-0 pl-2" v-show="product && isEdit">
	    		<h3>Result</h3>
	    		<b-table striped hover :items="getMappingTableItems()" :fields="getMappingColumnsTableFields()" stacked small></b-table>

	    	</div>
	    </div>
<simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
</simplert>

		    
	</div>
</template>
<script>
	import RemoteSelect from '@/components/RemoteSelect'
	import JsonViewer from '@/components/JsonViewer'
	import ExportMappingColumn from '@/components/ExportMappingColumn'
	import {evaluateMappingColumnData} from '@/plugins/configApi';
	import Simplert from 'vue2-simplert'
	import _ from 'lodash';
	import OrdenableList from '@/components/OrdenableList'

	const ROUTES = {
		MAPPINGS_LIST: 'settings-export-mappings'
	}

	export default {
		components:{
			RemoteSelect,
			JsonViewer,
			ExportMappingColumn,
			Simplert,
			OrdenableList
		},
		layout: 'app',
		async created(){
			let self = this;
			await this.$store.dispatch('config/fetch');
			window.n = ()=>self.$router.push({
				name:ROUTES.MAPPINGS_LIST
			});
		},
		mounted(){
			
		},
		methods:{
			onProductSelectChange(item){
				this.product = item;
			},
			onDragEnd(arr){
				let columns =  arr.map(item => {
					return {
						name: item.name,
						data: item.data
					};
				});
				this.$store.dispatch('config/saveMapping',{
					name:this.name,
					columns:columns
				});
			},
			deleteColumn(c){
				this.$store.dispatch('config/removeMappingColumn',{
					mappingName:this.name,
					columnName:c.name
				});
			},
			handleRemove(){
				let self = this;
				let obj = {
				    title: 'Confirm removal',
				    message: 'The mapping configuration will be loss permanently. Are you sure?',
				    type: 'warning',
				    useConfirmBtn: true,
				    customConfirmBtnText: 'Yes',
				    customCloseBtnText:'No',
				    customConfirmBtnClass: 'btn-warning btn-lg',
				    customCloseBtnClass: 'btn-primary btn-lg',
				    onConfirm: async ()=>{
				    	await self.$store.dispatch('config/removeMapping',this.name);
				    	self.$router.push({
							name:ROUTES.MAPPINGS_LIST
						});

				    }
				}
				this.$refs.simplert.openSimplert(obj)
			},
			getMappingTableItems(){
				if(!this.product) return [];
				let self = this;
				let p = {};
				this.columns.forEach(c=>{
					p[c.name] = evaluateMappingColumnData(c.data,self.product);
				});
				return [p];
			},
			getMappingColumnsTableFields(){
				let arr = [];
				this.columns.forEach(c=>{
					arr.push(c.name)
				});
				return arr;
			},
			onColumnSave(row){
				row.toggleDetails();

			},
			addColumn(){
				this.$store.dispatch('config/saveMappingColumn',{
					mappingName: this.name,
					column:{
						name:'new column #'+parseInt(this.columns.length+1),
						data: ''
					}
				});
			},
			showColumnItemDetails(item){
				item._showDetails=true;
			},
			async validate(){
				if(!this.name){
					this.$noty.warning('Name required');
					this.$refs.name.focus();
					return false;
				}
				if(!this.isEdit){
					if(await this.$store.dispatch('config/hasMapping',this.name)){
						this.$noty.warning('Name already in use');
						this.$refs.name.focus();
						return false;
					}
				}
				return true;
			},
			async save(){
				if(!await this.validate())return;
				await this.$store.dispatch('config/saveMapping',{
					name:this.name,
					newName:this.newName
				});
				this.$router.push({
					name:"settings-export-mappings-name",
					params:{
						name:this.name
					}
				});
				this.$noty.info('Saved')
			},
			formatProductSelectRow(p){
				return `#${p._id}`
			},
			test(){
				
			},
			param(n){
				return this.$store.state.route.params[n];
			}
		},
		computed:{
			isEdit(){
				return this.$store.state.route.params.name!='-1'
			},
			columns(){
				let r = this.$store.getters['config/getMapping'](this.name)
				if(r && r.columns){
					return _.map(r.columns, function(element) { 
					     return _.extend({}, element, {_showDetails: false});
					});
						
				}
				return [];
			}
		},
		data() {
			let name = this.param('name')!=='-1'?this.param('name'):'';
			return {
				newName:name,
				name:name,
				columnsTableFields: ['name','delete_column'],
				product:null,
				output:'',
				code:"",
				data:5,
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
					to: '/settings/export/mappings'
				}, {
					text: this.$store.state.route.params.name.toString()=='-1'?'New':name,
					active: true
				}]
			}
		}
	}
</script>
<style lang="scss" scoped>
textarea{
	background:black;
	color:white;
	min-width:300px;
	min-height: 100px;
	display:block;
}
</style>