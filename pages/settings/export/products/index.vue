<template>
	<div class="container mt-5">
    	
		
		<div class="row">

			<div class="col-md-12 m-0 p-0">
				<b-breadcrumb :items="breadcrumbs"/>
			</div>
			
			<div class="col-md-6 m-0 mt-4 p-0">
				<p class="title">Predefined queries</p>
				<b-list-group>
				  <b-list-group-item  @click="setQuery(1)">All the products 'en cours'</b-list-group-item>
				  <b-list-group-item v-if="false">Vestibulum at eros
				  		<span class="float-right">
				  			<i class="far fa-trash-alt"></i>
				  		</span>
				  	</b-list-group-item>
				</b-list-group>
			</div>
			<div class="col-md-6 m-0 p-0 mt-4 text-right pl-5">
				<p class="title">Test affected records</p>
				<pre class="p-2 text-left" contenteditable="true">{{ query | pretty }}</pre>
				<div class="row m-0 align-items-center">
					<label class="col text-left result m-0">85</label>
					<label class="col note m-0">(Affected records)</label>
					<b-btn variant="secondary" size="md" class="col">
						Count
					</b-btn>
				</div>
			</div>

			<div class="col-md-6 m-0 p-0 mt-4 text-left ">
				<p class="title">Export type</p>
				 <b-dropdown :text="mode" class="m-md-2">
				    <b-dropdown-item @click="mode='DB'">Remote database</b-dropdown-item>
				    <b-dropdown-divider></b-dropdown-divider>
				    <b-dropdown-item @click="mode='CSV'">CSV</b-dropdown-item>
				  </b-dropdown>
			</div>

			<div class="col-md-6 m-0 p-0 mt-4 text-left pl-md-5" v-show="mode==='DB'">
				<p class="title">Database</p>
				<remote-select 
	    		class=""
	    		id="databases"
	    		:cache="true"
	    		placeholder="Name or Type" 
			    source="config.databasesSelection"
			    dispatch="config/searchDatabases"
			    defaultValue=""
			    :formatFunction="formatDbSelectRow"
			    :parseInt="false"
			    @onChange="((i)=>database=i)"
			    @onClear="(()=>database=null)"
			    ></remote-select>
			</div>

			<div class="col-md-12 m-0 p-0 mt-4 text-left">
				<b-btn variant="success" 
				@click="handleExport()"
				:disabled="!canExport" size="lg">Export</b-btn>
			</div>

		</div>

	</div>
</template>
<script>
import RemoteSelect from '@/components/RemoteSelect';
import {download as downloadCSV} from '@/plugins/csv';
	export default{
		layout:'app',
		async fetch({store}){
		    await store.dispatch("config/fetch");
		},
		computed:{
		 	canExport(){
		 		return !!this.mode
		 	}
		},
		data(){
			return {
				database:null,
				mode:'',
				query:'',
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
					text: 'Products',
					active: true
				}]
			}
		},
		watch:{
			mode(val){
				this.$noty.success(val+' selected');
			}
		},
		filters: {
		    pretty(value) {
		    	value = JSON.stringify(value);
		    	console.log(value)
		      	return JSON.stringify(JSON.parse(value), null, 2);
		  	}
	  	},
		methods:{
			handleExport(){
				if(this.mode==='CSV'){
					return downloadCSV('result.csv',[{name:'Foo'},{name:"Bar"}],'#');
				}
			},
			formatDbSelectRow(p){
				return `${p.name} (${p.type})`;
			},
			setQuery(n){
				switch(n){
					case 1:
						this.query = {
							product_state: "en cours"
						};
						break;
					
				}
			}
		},
		components:{
			RemoteSelect
		},
	}
</script>
<style lang="scss" scoped>
textarea{
	min-width:100%;
	min-height:200px;
}
.list-group-item{
	font-size:12px;
}
.list-group-item:hover{
	cursor:pointer;
}
pre{
	outline:1px solid darkslateblue;
}
.title{
	height:50px;
	line-height: 50px;
	margin: 0px;
}
.note{
	font-size:8px;
	padding-right:5px;
}
.result{
	    font-size: 20px;
    color: burlywood;
	float:left;
}
</style>