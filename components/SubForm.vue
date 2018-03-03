<template>
	<div>
		<div class="pl-4 mt-1" v-for="field in fields" :key="field.$name">
			
			<label v-html="field.label" ></label>
			
			<input :ref="field.$name"
			:type="inputType(field)"
			class="form-control" v-if="isInput(field)" v-model="model[field.$name]" />

			<select :ref="field.$name" class="form-control" v-if="isSelect(field)" v-model="model[field.$name]">
				<option v-for="o in field.in" :key="optionValue(o)" :value="optionValue(o)" v-html="optionText(o)"></option>
			</select>
		
		</div>
	</div>
</template>
<script>
import {validationFail} from '@/plugins/autoform';
const TYPES = ['string','select','subform','password'];
	export default {
		props:['data','options'],
		data(){
			return {
				fields:[],
				model:Object.assign({},this.data||{})||{}
			}
		},
		created(){
			let self = this;

			if(this.options.validator){
				this.options.validator.exec = function(next){
					return self.validationFail(function(key){
						next(key);
						if (self.$refs[key] && self.$refs[key].length > 0) {
							self.$refs[key][0].focus();
						}
					});
				}
			}

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
				self.$emit('change',{
					$name: self.options.$name,
					value: self.normalizePayload(val)
				});
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
			validationFail,
			normalizePayload(d){
				if(d._id===null){
					d = Object.assign({},d);
					delete d._id;
				}
				return d;
			},
			normalizeTypeName(t){
				if(typeof t === 'function'){
					return t.name.toLowerCase();
				}
				if(t==='text') return 'string';
				return t;
			},
			bindDefaultFields(){
				if(!this.model._id){
					this.$set(this.model,'_id',null);
				}
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
							type: self.normalizeTypeName(fields[k].type),
							$name:k,
							label: k.charAt(0).toUpperCase()+k.substring(1)
							})
						);
				});

				arr.forEach(f=>{
					if(!TYPES.includes(f.type)){
						throw new Error('Type '+f.type+' unknown.');
					}else{
						
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