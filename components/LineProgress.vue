<template>
	<b-progress 
	ref="el"
	class="LineProgress"  :style="LineProgressStyle" 
	:value="value" variant="warning" :max="100" :animated="false" :striped="false">
		

	</b-progress>
</template>

<script>

export default {
  name: 'LineProgress',
  props: [
    'height',
    'bg',
    'value'
    
  ],
  fetch() {},
  data() {
    return {
    
    
    }
  },
  async asyncData() {
    return {}
  },
  computed: {
    LineProgressStyle() {
      return `${this.bg ? `background-color:${this.bg};` : ''} ${this.height ? `height:${this.height}px;` : ''}`
    }
  },
  methods: {
  	
  },
  components: {

  },
  created() {},
  mounted() {
  	var el = ()=>this.$refs.el
  	//set()
  	function set(){
  		let n = el();
  		if(!n) return setTimeout(set,100)
  			window.n=n;
  		var pb = n && n.$el.querySelector('.progress-bar')
  		if(!pb) return setTimeout(set,100)
  		pb.setAttribute('style','background-color:#FED16D!important')
  	}
  }
}

</script>

<style lang="scss">
.LineProgress {
  background-color: grey;
}

</style>
