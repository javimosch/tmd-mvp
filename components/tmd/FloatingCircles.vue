<template>
	<div class="FloatingCircles" ref="el">
	</div>
</template>
<script>
import * as d3 from "d3";
	export default {
		name: 'FloatingCircles',
		props:[],
		fetch(){

		},
		data(){
			return{}
		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{

		},
		components:{

		},
		created(){

		},
		mounted(){
			if(process.server)return;
			
			var el = this.$refs.el;

			var width = el.offsetWidth ? el.offsetWidth : innerWidth,
    height = 300;

    console.log(width,height,el.offsetHeight)

var data = d3.range(20).map(function() { return [Math.random() * width, Math.random() * height]; });

window.d3 = d3;
var color = d3.scaleOrdinal(d3.schemeCategory10);


d3.select(".FloatingCircles")
    .on("touchstart", nozoom)
    .on("touchmove", nozoom)
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .selectAll("image")
    .data(data)
  .enter()
  .append("image")
   .attr("xlink:href", "https://github.com/favicon.ico")
    .attr("transform", function(d) { 
    	console.log('translate',d);
    return "translate(" + d + ")";
     })
    .attr("width", 42)
    .on("click", clicked)
    


var initial = {};
function clicked(d, i) {
 if(!initial[i])initial[i] = i;
  if (d3.event.defaultPrevented) return; // dragged
  d3.select(this).transition()
      .attr("width", 45)
    .transition()
      .attr("width", 42)
      .attrTween('x',t=>initial[0] + 10 * Math.cos (2*Math.PI * t))
      /*
      .attrTween 'cx', -> (t) -> initial[0] + 10 * Math.cos (2*Math.PI * t)                
            .attrTween 'cy', -> (t) -> initial[1] + 10 * Math.sin (2*Math.PI * t)                
            .duration 4000
            .ease 'linear'
            .each 'end', rotateClockwise
            */
}

function nozoom() {
  d3.event.preventDefault();
}
		}
	}
</script>
<style lang="scss" scoped>
.FloatingCircles{
	max-width:300px;
	min-width: 250px;
	max-height: 300px;
	display:block;
}
</style>