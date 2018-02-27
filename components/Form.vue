<template>
	<div>
		<div class="mt-1" v-for="field in fields" :key="field.$name" v-show="fieldIsVisible(field)">
			<label v-html="field.label" ></label>
			
			<input class="form-control" v-if="field.type==='string'" v-model="model[field.$name]" />

			<select class="form-control" v-if="isSelect(field)" v-model="model[field.$name]">
				<option v-for="o in field.in" :key="optionValue(o)" :value="optionValue(o)" v-html="optionText(o)"></option>
			</select>

			<sub-form @change="subformChange" v-if="field.type==='subform'" :data="subformValue(field)" :options="subformOptions(field)"></sub-form>
		</div>
	<b-button-group class="mt-2">
    <b-button v-if="hasSave()" v-html="saveLabel()" @click="save()"></b-button>
    <b-button v-if="false">Button 2</b-button>
    <b-button v-if="false">Button 3</b-button>
  	</b-button-group>

	</div>
</template>
<script>
	import SubForm from './SubForm';
	export default {
		components:{
			SubForm
		},
		props:['data','options'],
		data(){
			return {
				fields:[],
				model:Object.assign({},this.data||{})||{}
			}
		},
		created(){
			this.fields = this.getFields();
			this.bindDefaultFields();

			this.$watch('data',(val)=>{
				let copy = Object.assign({},val||{});
				Object.assign(this.model, copy);
			},{
				deep:true
			})

			this.$watch('model',(val)=>{
				if(this.options.draft){
					this.options.draft(val);
				}
			},{
				deep:true
			})
		},
		mounted(){
			this.fields.forEach(f=>{
				if(f.type==='select'){
					if(f.default){
						this.model[f.$name] = '';
					}
				}
			});
			if(this.options.fetch){
				this.options.fetch();
			}
		},
		methods:{
			hasSave(){
				return typeof this.options.save !== 'undefined';
			},
			saveLabel(){
				if(this.hasSave()){
					if(typeof this.options.save === 'function'){
						return 'Save'
					}else{
						return this.options.save.label || 'Save';
					}
				}
			},
			save(){
				if(typeof this.options.save === 'function'){
					this.options.save(this.model);
				}else{
					this.options.save.handler(this.model);
				}
			},
			fieldIsVisible(field){
				if(field.visible) return field.visible(this.model)
				else return true;
			},
			subformChange(e){
				this.model[e.$name]=e.value;
			},
			bindDefaultFields(){
				if(!this.model._id){
					this.$set(this.model,'_id',null);
				}
			},
			subformOptions(f){
				if(!f.options) throw new Error('Subform options expected. Name is '+f.$name);
				return Object.assign(Object.assign({},f.options),{
					$name: f.$name
				});
			},
			subformValue(f){
				return this.model[f.$name]||{};
			},
			optionText(o){
				if(typeof o === 'string') return o;
				if(!o.text) throw new Error('Option text property expected');
				return o.text;
			},
			optionValue(o){
				if(typeof o === 'string') return o;
				if(typeof o.value ==='undefined') throw new Error('Option value property expected');
				return o.value;
			},
			isSelect(f){
				return f.type==='select' && f.in !== undefined;
			},
			bindProperty(name, value){
				if(typeof this.$data.model[name] == 'undefined'){
					this.$set(this.$data.model,name,value);
				}
			},
			getFields(){
				var self = this;
				let arr = [];
				let fields = this.options.fields;
				Object.keys(fields).forEach(k=>{
					arr.push(
						Object.assign(
							Object.assign({},fields[k]),{
							$name:k,
							label: k.charAt(0).toUpperCase()+k.substring(1)
							})
						);
				});
				arr.forEach(f=>{
					if(f.type==='subform'){
						self.bindProperty(f.$name,{});
					}
					if(f.type==='string'){
						self.bindProperty(f.$name,'');
					}
					if(f.type==='select'){
						if(!f.in) throw new Error('select [in] required');
						if(f.default){
							f.in.unshift({
								text: f.default,
								value: ''
							});
						}
						self.bindProperty(f.$name,'');
					}
				})
				return arr;
			}
		}
	};
</script>