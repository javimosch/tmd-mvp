<template>
	<div>
		<div class="mb-2">
			<b-form-input placeholder="name" v-model="name"></b-form-input>
		</div>
		<div>
			<p>You need to write a <a href="https://www.w3schools.com/js/default.asp" target="_blank">Javascript</a> function. Example: p.description.address.coords.lng.</p>
			<p>Available variables: p (product)</p>
			<textarea class="input" v-model="data"></textarea>
			<p>Output</p>
			<textarea class="output" v-model="output"></textarea>
		</div>
	    <b-button variant="secondary" class="mt-1" @click="test">
	    	Test
	    </b-button>
	    <b-button variant="warning" class="mt-1 ml-1" @click="cancel">
	    	Cancel
	    </b-button>
	    <b-button :disabled="hasInvalidData()" variant="primary" class="mt-1 ml-1" @click="save">
	    	Save
	    </b-button>
	</div>

</template>
<script>
	import {evaluateMappingColumnData} from '@/plugins/configApi';
	export default {
		components:{

		},
		props:['item','product','mappingName'],
		created(){
			
		},
		methods:{
			async cancel(){
				this.$emit('onCancel');
			},
			async save(){
				this.$store.dispatch('config/saveMappingColumn',{
					mappingName: this.mappingName,
					column:{
						originalName: this.item.name,
						name:this.name,
						data: this.data
					}
				});
				this.emit('onSave');
			},
			hasInvalidData(){
				return !this.test();
			},
			test(){				
				try{
					this.output = evaluateMappingColumnData(this.data,this.product);
					return true;
				}catch(err){
					this.output = err.toString();
					return false;
				}
			},
			emit(n){
				this.$emit(n);
			},
			onDelete(){
				this.$emit('delete');
			}
		},
		data() {
			return {
				name:this.item.name,
				data:this.item.data||'return p._id;',
				output:''
			};
		}
	}
</script>
<style lang="scss" scoped>
textarea.input{
	min-height: 150px;
	display:block;
	min-width: 100%;
}
textarea.input{
	background:black;
	color:goldenrod;
}
textarea.output{
	background:lightcyan;
	color:black;
}
</style>