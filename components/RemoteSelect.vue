<template>
	<div class="row align-items-center p-0 m-0">
		
		<input 
		ref="input"
		:placeholder="ph"
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
	import _ from 'lodash';
	import LodashMixin from '@/mixins/Lodash';
	export default{
		mixins:[LodashMixin],
		props:['placeholder','source','dispatch','formatFunction','defaultValue','parseInt','cache',"id"],
		created(){
			if(this.cache&& !this.id){
				throw new Error('Cache needs id prop'+new Error().stack);
			}
		},
		watch:{
			defaultValue(val){
				this.searchById(val);
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
			let value = localStorage.getItem(this.getCacheId());
			if(this.cache && !!value){
				this.searchById(value);
			}
		},
		methods:{
			focus(){
				this.$refs.input.focus();
			},
			async searchById(value){
				this.value = value;
				await this.search(false)
				this.getResults.forEach(r=>{
					if(r._id == value){
						this.selectItem(r);
					}
				});
			},
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
				this._id = null;
			},
			selectItem(i){
				var item = i;//this.makeNonReactiveCopy(i);

				console.log('selectItem',item)
				this.$emit('onChange',item);
				this.selectedItem = item;
				this.value=this.formatItem(item);
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