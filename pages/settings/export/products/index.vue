<template>
	<div class="container mt-5">
    	
		
		<div class="row">

			<div class="col-md-12 m-0 p-0">
				<b-breadcrumb :items="breadcrumbs"/>
			</div>

			
			<div class="col-md-12 m-0 p-0 pb-2 mt-5" v-show="hasMapping">
	    		<b-btn variant="primary" size="lg" class="ml-2 float-none  d-block float-sm-right" @click="save()">Save changes</b-btn>
	    		<b-button class="mt-1" variant="primary" size="lg" to="/settings/export/mappings">Product mappings</b-button>
	    	</div>
	    	

			<div class="col-md-12 m-0 p-0">
				<p class="title_block">Select a product mapping</p>
				<remote-select 
	    		class=""
	    		id="mappings"
	    		:cache="true"
	    		placeholder="Name" 
			    source="config.mappingsSelection"
			    dispatch="config/searchMappings"
			    defaultValue=""
			    :formatFunction="((m)=>m.name)"
			    :parseInt="false"
			    @onChange="((i)=>mapping=i)"
			    @onClear="(()=>mapping=null)"
			    ></remote-select>
			</div>
			
			<div class="col-md-6 m-0 mt-4 p-0" v-show="hasMapping">
				<p class="title_block">Predefined queries</p>
				<b-list-group>
				  <b-list-group-item  @click="setQuery(1)">All the products 'en cours'</b-list-group-item>
				  <b-list-group-item  @click="setQuery(2)">All the products 'en cours' with LTI Website Export flag checked</b-list-group-item>
				  <b-list-group-item v-if="false">Vestibulum at eros
				  		<span class="float-right">
				  			<i class="far fa-trash-alt"></i>
				  		</span>
				  	</b-list-group-item>
				</b-list-group>
			</div>
			<div class="col-md-6 m-0 p-0 mt-4 text-right pl-5" v-show="hasMapping">
				<p class="title_block">Local query to grab documents</p>
				<js-editor class="text-left" cmMode="text/json" v-model="query"></js-editor>
				<div class="row m-0 align-items-center">
					<label class="col text-left result m-0" v-html="queryCount"></label>
					<label class="col note m-0">(Affected records)</label>
					<b-btn variant="secondary" size="md" class="col" @click="count()">
						Count
					</b-btn>
				</div>
				<p class="note pt-2">Read more about MongoDB conditions <a href="https://docs.mongodb.com/manual/reference/operator/query/#query-selectors" target="_blank">here.</a></p>
			</div>

			<div class="col-md-6 m-0 p-0 mt-4 text-left " v-show="hasMapping">
				<p class="title_block">Export type</p>
				 <b-dropdown :text="mode" class="m-md-2">
				    <b-dropdown-item @click="mode='DB'">Remote database</b-dropdown-item>
				    <b-dropdown-divider></b-dropdown-divider>
				    <b-dropdown-item @click="mode='CSV'">CSV</b-dropdown-item>
				  </b-dropdown>
			</div>

			<div class="col-md-6 m-0 p-0 mt-4 text-left" v-show="hasMapping &&  mode==='CSV'">
				<label>Column separator</label>
				<b-form-input placeholder="Ex: #" v-model="columnSeparator"/>
				<label class="mt-3">FileName (.csv)</label>
				<b-form-input placeholder="Ex: result.csv" v-model="fileName"/>
			</div>

			<div class="col-md-6 m-0 p-0 mt-4 text-left pl-md-5" v-show="hasMapping && mode==='DB'">
				<p class="title_block">Database</p>
				<remote-select
				ref="database"
	    		class=""
	    		id="database"
	    		:cache="false"
	    		placeholder="Name or Type" 
			    source="config.databasesSelection"
			    dispatch="config/searchDatabases"
			    :defaultValue="databaseInitialValue"
			    :formatFunction="formatDbSelectRow"
			    :parseInt="false"
			    @onChange="((i)=>database=i)"
			    @onClear="(()=>database=null)"
			    ></remote-select>
			</div>
		</div>
			
		<div class="row">
			<div class="col-md-12 m-0 p-0 mt-4 text-left" v-show="hasMapping">
				<div class="m-0 p-0 text-left" v-show="hasMapping &&  mode==='DB'">
					<p class="title_block">
					The follow script will run once.
					</p>
					<js-editor v-model="script"></js-editor>
					<b-btn class="mt-1" @click="loadExportExample('mysql')">MySQL Example</b-btn>
					
				</div>

				<b-btn variant="success" 
				class="mt-5"
				@click="handleExport()"
				:disabled="!canExport" size="lg">Export</b-btn>
				<div class="mt-5 ml-2">
					<b-form-checkbox 
					
	                     v-model="isSimulation"
	                     :value="true"
	                     :unchecked-value="false">
	                <span v-show="isSimulation">Toggle mode (Development)</span>     
	                <span v-show="!isSimulation">Toggle mode (Production)</span>     
					</b-form-checkbox>
				</div>

                <p class="mt-1 font-weight-light" v-show="isSimulation">Note: Remote database will not be modified if success.</p>
                <p class="mt-1 font-weight-light" v-show="!isSimulation">Note: Remote database WILL be modified if success.</p>
			</div>
			
			<div class="col-md-12 m-0 p-0 mt-4 text-left" v-show="hasMapping &&  mode==='DB'">
				<p>Generated queries allow you to copy paste into the remote database if connection is not possible (E.g mysql phpadmin).</p>
				<p class="title_block">
					Queries
					</p>
				<div class="w-100 d-block error_output" disabled v-html="outputQueries"></div>
				<b-btn variant="secondary" class="mt-2"
				@click="outputQueries=''"
				 size="md" :disabled="!outputQueries">Clear</b-btn>
			</div>
			<div class="col-md-12 m-0 p-0 mt-4 text-left" v-show="hasMapping &&  mode==='DB'">
				<p class="title_block">
					Raw output
					</p>
				<div class="w-100 d-block error_output" disabled v-html="output"></div>
				<b-btn variant="secondary" class="mt-2"
				@click="output=''"
				 size="md" :disabled="!output">Clear</b-btn>
			</div>
		</div>
<simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
</simplert>
	</div>
</template>
<script>
import RemoteSelect from '@/components/RemoteSelect';
import JsEditor from '@/components/JsEditor';
//import { Base64 } from 'js-base64';
import Simplert from 'vue2-simplert'
import {createMySqlProductExportExampleScript} from '@/plugins/product';
var beautify_js = require('js-beautify').js_beautify
import {download as downloadCSV} from '@/plugins/csv';
	export default{
		layout:'app',
		async fetch({store}){
		    await store.dispatch("config/fetch");
		},
		computed:{
			databaseInitialValue(){
				return this.mapping && this.mapping.database || '';
			},
		 	canExport(){
		 		let hasMode = !!this.mode
		 		if(!hasMode) return false;
		 		if(this.mode==='CSV' && !this.columnSeparator) return false;
		 		if(this.mode==='CSV' && !this.fileName) return false;
		 		if(this.mode==='DB' && !this.database) return false;
		 		if(this.mode==='DB' && !this.script) return false;
		 		return true;
		 	},
		 	hasMapping(){
		 		return !!this.mapping;
		 	},
		 	isQueryValid(){
		 		try{
					JSON.parse(this.query)
					return true
				}catch(err){
					return false;
				}
		 	}
		},
		data(){
			return {
				isSimulation:true,
				outputQueries:'',
				output:'',
				script:'',
				columnSeparator:'#',
				fileName:'result.csv',
				queryCount:0,
				mapping:null,
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
				//this.$noty.success(val+' selected');
			},
			mapping(val){
				if(!val)return;
				this.mode = val.mode;
				var q = val.query||"{}"; 
				try{
					q = JSON.stringify(JSON.parse(q), null, 2)
				}catch(err){
					this.$noty.warning('Unable to parse query (Details in console)');
					console.warn(val.query,err);
					q = '';
				}
				this.query = q;
				this.fileName = val.fileName||'result.csv';
				this.columnSeparator = val.columnSeparator||'#';
				this.script = val.script||'';
			}
		},
		filters: {
		    pretty(value) {
		    	value = JSON.stringify(value);
		    	console.log(value)
		      	return JSON.stringify(JSON.parse(value), null, 2);
		  	}
	  	},
	  	created(){
	  		window.n = this.$refs
	  	},
		methods:{
			setOutput(o){
				this.output = beautify_js(o, { indent_size: 2 });
			},
			getQueryError(){
		 		try{
					JSON.parse(this.query)
					return ''
				}catch(err){
					return err.toString();
				}
		 	},
			async count(){
				if(!this.isQueryValid){
					return this.$noty.warning('Invalid query: '+this.getQueryError());
				}
				let c = await this.$store.dispatch('products/countExportQuery',JSON.parse(this.query));
				this.queryCount = c.count;
			},
			async validate(){
				if(!this.database && this.mode==="DB"){
					this.$noty.warning('Database required');
					this.$refs.database.focus();
					return false;
				}
				if(!this.isQueryValid){
					this.$noty.warning('Invalid query: '+this.getQueryError());
					return false;
				}
				return true;
			},
			async save(){
				if(!await this.validate())return;
				let m = {
					name: this.mapping.name,
					query:this.query,
					mode:this.mode,
					columnSeparator:this.columnSeparator,
					fileName: this.fileName,
					database:this.database && this.database._id,
					script: this.script
				};
				m = Object.assign(Object.assign({},this.mapping),m);

				await this.$store.dispatch('config/saveMapping',m);
				this.$noty.info('Saved')
			},
			async handleExport(){
				let self = this;
				if(!await this.validate()) return;
				await this.save();
				if(this.mode==='CSV'){
					let docs = await this.$store.dispatch('products/fetchMappedList', this.mapping._id);
					return downloadCSV('result.csv',docs,'#');
				}
				if(this.mode==='DB'){
					let output = '';
					return this.$store.dispatch('products/runMappingScript',{
						mappingId:this.mapping._id,
						isSimulation: this.isSimulation
					}).then(res=>{
						self.$noty.success('Export success')

						self.setOutput(JSON.stringify(res));
						

						self.outputQueries =res.results.map(r=>r.query).join('<br>')
					}).catch(err=>{
						self.$noty.error('Export fail')
						output = JSON.stringify(err.data,undefined,2);
						self.setOutput(output);
						self.outputQueries =err.data.results.map(r=>r.query).join('<br>')
					});
				}
				return this.$noty.warning(`Mode ${this.mode} no implemented`);
			},
			formatDbSelectRow(p){
				return `${p.name} (${p.type})`;
			},
			setQuery(n){
				switch(n){
					case 1:
						this.query = JSON.stringify({
							product_state: "en cours"
						},null,2);
						break;
					case 2:
						this.query = JSON.stringify({
							product_state: "en cours",
							"commercialisation.lti_website":true
						},null,2);
						break;
					
				}
			},
			loadExportExample(t){
				let obj = {
					title: 'Confirm',
					message: 'The current script will be lost. Are you sure?',
					type: 'warning',
					useConfirmBtn: true,
					customConfirmBtnText: 'Yes',
					customCloseBtnText: 'No',
					customConfirmBtnClass: 'btn-warning btn-lg',
					customCloseBtnClass: 'btn-primary btn-lg',
					onConfirm: async () => {
						switch (t) {
							case 'mysql':
								this.script = createMySqlProductExportExampleScript();
								break;
						}
					}
				}
				this.$refs.simplert.openSimplert(obj)
			}
		},
		components:{
			RemoteSelect,
			JsEditor,
			Simplert
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
	height: 25px;
    line-height: 50px;
    margin: 0px;
    background: #0B1F47;
    color: white;
    text-align: left!important;
    padding-left: 20px;
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
.error_output{
	min-height: 300px;
	background-color:whitesmoke;
	word-wrap: break-word;
}
</style>