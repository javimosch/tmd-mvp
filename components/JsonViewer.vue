<template>
	<textarea ref="el" class="form-control json-viewer" v-html="parsedData()"></textarea>	
</template>
<script>
	export default{
		props:['data','minWidth','minHeight'],
		mounted(){
			if(this.minWidth){
				this.$refs.el.style.minWidth=this.minWidth+'px';
			}
			if(this.minHeight){
				this.$refs.el.style.minHeight=this.minHeight+'px';
			}
		},
		methods:{
			parsedData(){
				try{
					if(this.data==null)return '';
					return JSON.stringify(this.data, undefined, 4);
				}catch(err){
					return err.toString()
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.json-viewer{
		background:midnightblue;
		color:white;
		min-height: 100px;
		display:block;
		overflow-h:scroll;
	}
</style>