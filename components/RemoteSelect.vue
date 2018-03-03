<template>
	<div class="row align-items-center p-0 m-0">
		
		<input :placeholder="ph"
		:disabled="isSelected"
		class="form-control d-inline-block" v-model="value" />
		
		<span v-show="!isSelected">
		<b-button 
		@click="search(true)" class="d-inline-block" variant="primary">Search</b-button>
		</span>	

		<span v-show="isSelected">
		<b-button 	
		@click="clearSelection()" class="d-inline-block" variant="primary">Clear</b-button>
		</span>

		<div v-show="showResults">
			<b-list-group>
			  <b-list-group-item
			  v-for="item in getResults" :key="item._id"
			  v-html="formatItem(item)"
			  @click="selectItem(item)"
			  >
			  </b-list-group-item>
			  
			</b-list-group>
		</div>

	</div>
</template>
<script>
	export default{
		props:['placeholder','source','dispatch','formatFunction','defaultValue','parseInt','cache',"id"],
		created(){
			if(this.cache&& !this.id){
				throw new Error('Cache needs id prop'+new Error().stack);
			}
			
		},
		
		data(){
			return{
				shouldDisplayResults:true,
				isSelected:false,
				ph: this.placeholder||'',
				value:this.defaultValue||'',
				selectedItem:null
			}
		},
		computed:{
			getResults(){
				return eval(`this.$store.state.${this.source}`);
			},
			showResults(){
				return !this.isSelected && this.shouldDisplayResults;
			}
		},
		async mounted(){
			let _id = localStorage.getItem(this.getCacheId());
			if(this.cache && !!_id){
				await this.search(false)
				this.getResults.forEach(r=>{
					if(r._id == _id){
						this.selectItem(r);
					}
				});
			}
		},
		methods:{
			getCacheId(){
				return 'remoteselect_'+this.id+'_at_'+location.href.replace(location.origin,'').replace(new RegExp('/','g'),'_');
			},
			saveToCache(){
				if(this.cache){
					localStorage.setItem(this.getCacheId(),this.selectedItem._id);
				}
			},
			clearSelection(){
				this.isSelected=false;
				this.value='';
				this.$emit('onClear');
			},
			selectItem(i){
				console.log('selectItem',i)
				this.$emit('onChange',i);
				this.selectedItem = i;
				this.value=this.formatItem(i);
				this.isSelected=true;
				this.shouldDisplayResults=false;
				this.saveToCache()
			},
			formatItem(i){
				return this.formatFunction?this.formatFunction(i):'Prop formatFunction required';
			},
			async search(display){
				if(this.parseInt){
					try{
						this.value=parseInt(this.value);
						if(isNaN(this.value)) throw new Error('NaN');
					}catch(err){
						this.$emit('onError',"Integer required");
						this.value="Integer required";
						setTimeout(()=>this.value='',1000);
						return;
					}
				}
				await this.$store.dispatch(this.dispatch,{
					value:this.value
				});
				this.shouldDisplayResults=display||false;
			}
		}
	}
</script>
<style lang="scss" scoped>
	input{
		max-width:200px;
	}
	input,button{
		border-radius: 0px;
		border:0px;
	}
	.list-group{
		    position: absolute;
    min-width: 250px;
    overflow-y: scroll;
    max-height: 300px;
	}
</style>