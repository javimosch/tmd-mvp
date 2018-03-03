<template>
	<div>

		<div class="" v-if="showId">
			<label v-html="idLabel()"></label>
		</div>

		<div class="mt-2" v-for="field in fields" :key="field.$name" v-show="fieldIsVisible(field)">
			<label v-html="field.label" ></label>
			
			<input :ref="field.$name"
			:type="inputType(field)"
			class="form-control" v-if="isInput(field)" v-model="model[field.$name]" />

			<select :ref="field.$name" class="form-control" v-if="isSelect(field)" v-model="model[field.$name]">
				<option v-for="o in field.in" :key="optionValue(o)" :value="optionValue(o)" v-html="optionText(o)"></option>
			</select>

			<sub-form :ref="field.$name" @change="subformChange" v-if="field.type==='subform'" :data="subformValue(field)" :options="subformOptions(field)"></sub-form>
		</div>
	
	<b-button-group class="mt-2">
    <b-button v-if="hasSave()" v-html="saveLabel()" @click="save()"></b-button>
    <b-button v-if="hasCancel()" v-html="cancelLabel()" @click="cancel()"></b-button>
    <b-button v-if="hasDeleteButton()" v-html="'Delete'" @click="deleteHandler()"></b-button>
  	</b-button-group>

	</div>
</template>
<script>
	import SubForm from './SubForm';
	import {validationFailBehaviour, validationFail, save, cancel, getFields, TYPES,normalizeTypeName,bindProperty} from '@/plugins/autoform';
	
	export default {
		components:{
			SubForm
		},
		props:['data','options','cancelBtn','showId'],
		data(){
			return {
				subformValidators:{},
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


			Object.assign(this.model, Object.assign({},this.data||{}));

		},
		mounted(){
			window.f = this;
			this.fields.forEach(f=>{
				if(f.type==='select'){
					this.model[f.$name] = this.model[f.$name] || f.default || '';
				}
			});
			if(this.options.fetch){
				this.options.fetch();
			}
		},
		methods:{
			deleteHandler(){
				this.$store.dispatch(this.options.delete,this.model._id);
				this.$emit('delete');
			},
			idLabel(){
				return this.model._id?`<b>Id</b> ${this.model._id}`:`<b>(New)</b>`;
			},
			hasDeleteButton(){
				return this.options.delete!==undefined && this.model._id!==null;
			},
			hasSave(){
				return typeof this.options.save !== 'undefined';
			},
			hasCancel(){
				return typeof this.options.cancel !== 'undefined' && this.cancelBtn!==false;
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
			cancelLabel(){
				if(this.hasSave()){
					if(typeof this.options.cancel === 'function'){
						return 'Cancel'
					}else{
						return this.options.cancel.label || 'Cancel';
					}
				}
			},
			save,
			cancel,
			validationFailBehaviour,
			validationFail(next){
				let rta = validationFail.apply(this,arguments)
				if(rta==false){
					Object.keys(this.subformValidators).forEach(k=>{
						rta = this.subformValidators[k].exec(next);
						if(rta) return false;
					});
				}
				return rta;
			},
			fieldIsVisible(field){
				if(field.visible) return field.visible(this.model)
				else return true;
			},
			normalizePayload(d){
				if(d._id===null){
					d = Object.assign({},d);
					delete d._id;
				}
				return d;
			},
			normalizeTypeName,
			subformChange(e){
				this.model[e.$name]=e.value;
			},
			bindDefaultFields(){
				if(!this.model._id){
					this.$set(this.model,'_id',null);
				}
			},
			getSubformValidator(f){
				if(!this.subformValidators[f.$name]){
					this.subformValidators[f.$name] = {
						exec:null
					}
				}
				return this.subformValidators[f.$name];
			},
			subformOptions(f){
				let self = this;
				if(!f.options) throw new Error('Subform options expected. Name is '+f.$name);
				return Object.assign(Object.assign({},f.options),{
					validator: self.getSubformValidator(f),
					$name: f.$name
				});
			},
			subformValue(f){
				return this.model[f.$name]||{};
			},
			inputType(f){
				if(f.type==='password') return f.type;
				else return 'text';
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
			isInput(f){
				return ['string','password'].includes(f.type)
			},
			isSelect(f){
				return f.type==='select' && f.in !== undefined;
			},
			bindProperty,
			getFields
		}
	};
</script>