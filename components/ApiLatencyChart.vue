<template>
<div class="ApiLatencyChart">
  <no-ssr>
    <div id="container"
         ref="el">
    </div>
  </no-ssr>
</div>

</template>

<script>
import io from 'socket.io-client';
import NoSSR from 'vue-no-ssr';

export default {
  name: 'ApiLatencyChart',
  props: [],
  fetch() {},
  data() {
    return {}
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {

  },
  components: {
    'no-ssr': NoSSR
  },
  created() {
    const socket = io(process.env.RPC_ENDPOINT)
    socket.on('connect', function() {
      console.info('Connected')
      socket.on('point', console.warn)
    })
    socket.on('event', function(data) {})
    socket.on('disconnect', function() {})
  },
  mounted() {
    if (typeof window === 'undefined') {
      return
    }
    renderChart(this.$refs)
  }
}

function renderChart($refs) {
  if (!$refs.el) {
    return setTimeout(() => renderChart($refs), 100)
  }
  var tauCharts = require('taucharts')
  var tooltip = require('taucharts/dist/plugins/tooltip')
  var legend = require('taucharts/dist/plugins/legend')
  var trendline = require('taucharts/dist/plugins/trendline')
  
  var chart = new tauCharts.Chart({

    data: [
      {
        name: 'John',
        age: 30,
        duration: 50,
        gender: 'Male',
        hasChild: true
      },
      {
        name: 'Mary',
        age: 22,
        duration: 100,
        gender: 'Female',
        hasChild: false
      }
    ],
    type: 'line',
    x: 'age',
    y: 'duration',
    color: 'hasChild',
    size: null,
    plugins: [
      tauCharts.api.plugins.get('tooltip')(),
      tauCharts.api.plugins.get('legend')(),
      tauCharts.api.plugins.get('trendline')(),
      // tauCharts.api.plugins.get('quick-filter')(),
    ]

  })

  chart.renderTo('#container')
}

</script>

<style lang="scss" scoped="">
.ApiLatencyChart {}
</style>
