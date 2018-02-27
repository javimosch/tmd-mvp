<template>
	<div>
		<div class="pl-2 mt-1" v-for="field in fields" :key="field.$name">
			<label v-html="field.label" ></label>
			
			<input class="form-control" v-if="field.type==='string'" v-model="model[field.$name]" />

			<select class="form-control" v-if="isSelect(field)" v-model="model[field.$name]">
				<option v-for="o in field.in" :key="optionValue(o)" :value="optionValue(o)" v-html="optionText(o)"></option>
			</select>

			


		</div>
	</div>
</template>
<script>
	export default {
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

			let self = this;
			this.$watch('model',(val)=>{
				if(this.options.draft){
					this.options.draft(val);
				}
				self.$emit('change',{
					$name: self.options.$name,
					value: val
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
			bindDefaultFields(){
				if(!this.model._id){
					this.$set(this.model,'_id',null);
				}
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
				console.log('Fields', arr);
				return arr;
			}
		}
	};
</script>