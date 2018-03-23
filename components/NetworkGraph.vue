<template>
<div id="networkWrapper">
</div>
</template>

<script>
import '@/node_modules/vis/dist/vis.min.css';
import * as vis from '@/node_modules/vis/dist/vis.min';
import _ from 'lodash';
export default {
  props:['data'],
  components: {

  },
  methods:{
  	setData(network, data){
  		data = _.cloneDeep(data);
  		var networkData = {
	      nodes: new vis.DataSet(data.nodes),
	      edges: new vis.DataSet(data.edges)
	    };
  		network.setData(networkData);
  	}
  },
  data(){
  	return {
  		selectedNode:null
  	};
  },
  mounted() {
    if (typeof window === 'undefined') {
      return
    }
    let self = this;
    var container = document.getElementById('networkWrapper')
    var options = {
      layout: {
        hierarchical: true
      },
      height: '700px',
      interaction: {
        navigationButtons: false,
        selectable: true
      },
    }
    var network = new vis.Network(container, {}, options)
    this.setData(network, this.data)
    network.on('selectNode', (r)=>this.$emit('onSelect',r.nodes[0]));

    this.$watch('data',v=>self.setData(network, this.data,{deep:true}));
  }
}

</script>

<style lang="scss" scoped="">
#networkWrapper{

}
</style>
