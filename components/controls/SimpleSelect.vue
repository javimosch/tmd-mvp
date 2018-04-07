<template>
	<div class="SimpleSelect">
		<select class="form-control" :value="value" @input="input" @change="change">
			<option selected :value="null">New</option>
            <slot>
            	
            </slot>
        </select>
	</div>
</template>
<script>
	export default {
		name: 'SimpleSelect',
		props:['value'],
		fetch(){

		},
		data(){
			return{
				selectedValue:''
			}
		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{
			input(e){
				this.$emit('input',e.target.value);
			},
			change(e){
				this.$emit('change');
			}
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
.SimpleSelect{
	
}
select{
	min-width:250px;
}
</style>