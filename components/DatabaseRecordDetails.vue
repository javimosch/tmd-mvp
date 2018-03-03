<template>
	<crud-form @delete="onDelete()" :showId="showId" :data="data" :options="formOptions" :cancel-btn="cancelBtn"
	@onSave="emit('onSave')"
	@onCancel="emit('onCancel')"
	></crud-form>
</template>
<script>
import CrudForm from '@/components/Form';
	export default {
		components:{
			CrudForm
		},
		props:['data','cancelBtn','showId'],
		created(){
		},
		methods:{
			emit(n){
				this.$emit(n);
			},
			onDelete(){
				this.$emit('delete');
			}
		},
		data() {
			let self = this;
			return {
				formOptions: {
					fetch: () => {
						let id = self.data._id;//this.$store.state.route.params.id
						this.$store.dispatch('databases/fetch', id)
					},
					draft: (p) => this.$store.dispatch('databases/draft', p),
					save: async (data) => {
						let doc = await this.$store.dispatch('databases/save', data);
						self.$router.push({
							name: "settings-databases-id",
							params: {
								id: doc._id
							}
						});
					},
					delete: 'databases/delete',
					cancel: async (actions)=>{
						actions.clear();
					},
					validate(key) {
						self.$noty.warning(`${key} required`);
					},
					fields: {
						name:{
							type:String,
							required:true
						},
						type: {
							type: 'select',
							in: ['MYSQL'],
							default: '',
							defaultText:"Select",
							required: true
						},
						mysql: {
							visible: (model) => model.type === 'MYSQL',
							type: 'subform',
							options: {
								fields: {
									host: {
										type: String,
										required: true
									},
									database: {
										type: String,
										required: true
									},
									user: {
										type: String,
										required: true
									},
									password: {
										type: 'password',
										required: true
									}
								}
							}
						}

					}
				}
			}
		}
	}
</script>