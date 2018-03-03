<template>
	<div>
		<b-list-group>
		<draggable v-model="list" :options="{group:forKey}" @end="onDragEnd">
	   		<b-list-group-item v-for="e in list" :key="e[forKey]" v-html="format(e)"></b-list-group-item>
		</draggable>
		</b-list-group>
	</div>
</template>
<script>
	import draggable from 'vuedraggable'
	import _ from 'lodash';
	export default {
		props:['format','data','forKey'],
		created(){
			let self = this;
			this.$watch('data',()=>{
				self.updateList();
			},{
				deep:true
			});
			self.updateList();
		},
		methods:{
			onDragEnd(){
				this.$emit('onDragEnd', this.list);
			},
			updateList(){
				this.list = _.map(this.data,_.clone);	
			}
		},
		data(){
			return {
				list:[],
				drag:false
				}
		},
        components: {
            draggable,
        }
    }
</script>