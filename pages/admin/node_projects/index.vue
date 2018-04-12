<template>
	<div class="NodeProjects">
		<div class="row">
			<div class="col-12">
				<NodeProjectsSelect v-model="item._id"></NodeProjectsSelect>
			</div>
			<div class="col-12">
				<label>Name</label>
				<b-form-input v-model="item.name" placeholder="Name"></b-form-input>
			</div>
		</div>
	</div>
</template>
<script>
	import { call } from '@/plugins/rpcApi';
	import NodeProjectsSelect from '@/components/ii/NodeProjectsSelect';
	export default {
		name: 'NodeProjects',
		props:[],
		fetch(){

		},
		data(){
			return{
				item:{
					name:'',
					_id:null
				}
			}
		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{

		},
		components:{
			NodeProjectsSelect
		},
		created(){
			

		},
		mounted(){
			
			let a = window.Error;
			window.Error = function(m){
				console.warn('error created')
				return new a(m)
			}

		}
	}
</script>
<style lang="scss" scoped>
.NodeProjects{
	
}
</style>