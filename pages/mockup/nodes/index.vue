<template>
<div>
  <node-details :props="$data.selectedNode"
                @onSave="onSaveNode"
                @onClear="(()=>selectedNode=null)"></node-details>
  <network-graph @onSelect="openDetails"
                 :data="normalizedGraphData"></network-graph>
</div>

</template>

<script>
import NetworkGraph from '@/components/NetworkGraph';
import NodeDetails from '@/components/NodeDetails';
export default {
  middleware:['auth'],
  components: {
    NetworkGraph,
    NodeDetails
  },
  methods: {
    openDetails(s) {
      this.selectedNode = this.graphData.filter(gd => gd.id === s)[0]
    },
    onSaveNode(state) {
      console.info(state)
      let r = this.graphData.filter(gd=>gd.id==state.id);
      if(r.length>0){
      	Object.assign(r[0],state);
      }else{
      	this.graphData.push(state);
      }
    }
  },
  data() {
    let graphData = [
      {
        id: 1,
        name: 'T1-Q1',
        title: 'Mon travail',
        level: 1
      },
      {
        id: 2,
        name: 'T1-Q1-R1',
        title: 'Fin du contrat de travail',
        level: 2
      }
    ]

    return {
      selectedNode: null,
      graphData: graphData
    }
  },
  computed: {
    normalizedGraphData() {
      var edges = [
        {
          id: '1-to-2',
          from: 1,
          to: 2
        }
      ];
      var nodes = this.graphData.map(d => ({
        id: d.id,
        label: d.name,
        title: d.title,
        level: d.level
      }))
      return {
        nodes: nodes,
        edges: edges
      }
    }
  }
};

</script>
