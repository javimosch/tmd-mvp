<template>
<div class="Anime mb-5 pb-5">
  <div class="row">
    <div class="col-12 position-relative">
      <img class="Box" :src="icon"
           ref="el"/>
      <div class="PathWrapper d-none"
           ref="pathWrapper">
      </div>
    </div>
  </div>
</div>

</template>

<script>
import PathSVG from '@/assets/circle.svg';
import anime from 'animejs';
var shortid = require('shortid')

var easing = [
  'linear',
  'easeInQuad',
  'easeInCubic',
  'easeInQuart',
  'easeInQuint',
  'easeInSine',
  'easeInExpo',
  'easeInCirc',
  'easeInBack',
  'easeInQuad',
  'easeOutCubic',
  'easeOutQuart',
  'easeOutQuint',
  'easeOutSine',
  'easeOutExpo',
  'easeOutCirc',
  'easeOutBack',
  'easeOutQuad',
  'easeInOutQuad',
  'easeInOutCubic',
  'easeInOutQuart',
  'easeInOutQuint',
  'easeInOutSine',
  'easeInOutExpo',
  'easeInOutCirc',
  'easeInOutBack'
]

export default {
  name: 'Anime',
  props: ['icon','position'],
  fetch() {},
  data() {
    return {
      elSelector: '',
      PathSVG,
      pathSelector: ''
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
    basic() {
      anime({
        targets: `#${el.id}`,
        translateX: [
          {
            value: 100,
            duration: 1200
          },
          {
            value: 0,
            duration: 800
          }
        ],
        rotate: '1turn',
        backgroundColor: '#FFF',
        duration: 20000,
        loop: true
      })
    },
    followPath() {
      var self = this
      var elWrapper = this.$refs.pathWrapper
      elWrapper.id = shortid.generate()
      var pathSelector = `#${elWrapper.id} path`
      this.pathSelector = pathSelector

      window.fetch('circle.svg', {
        headers: {
          'content-type': 'image/svg+xml'
        }
      }).then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, 'text/xml'))
        .then(data => {
          elWrapper.appendChild(data.children[0])
          self.animate()
        })

    },
    animate() {
      var self = this
      var randomOp = ()=>(Math.random()>0.5?'-':'+')
      var randomVal = ()=> parseInt(Math.random() * 25)
      var randomEasing = ()=> 'linear'//easing[parseInt(Math.random() * 26, 10)]
      var path = anime.path(self.pathSelector)

      var motionPath = anime({
        targets: this.elSelector,
        //translateX: path('x'),
        //translateY: path('y'),
         translateX:[
         	{value: +window.innerWidth+10+(self.position*30),duration:0,easing:'linear'},
         	//{value: 0,duration:1000},
         	//{value: 0,duration:2000},
         	{value: -50-(self.position*50),duration:5000,easing:'linear'},
        	//{value:`${randomOp()}=${randomVal()}`,duration:6000,easing:randomEasing()},
        	//{value:`${randomOp()}=${randomVal()}`,duration:6000,easing:randomEasing()}
         ],
         translateY:[
         	//{value:},
        	{value:`${randomOp()}=${randomVal()}`,duration:2000,easing:randomEasing()},
        	{value:`${randomOp()}=${randomVal()}`,duration:3000,easing:randomEasing()}
         ],
         delay: function(el, i, l) {
    return self.position * 450;
  },
        // rotate: path('angle'),
        //elasticity: 0,
        //easing: easing[parseInt(Math.random() * 26, 10)],
        //duration: 2000,
        loop: false,
        complete: () => {
        	self.animate();
        }
        //direction: 'alternate'
      })
    }
  },
  components: {

  },
  created() {},
  mounted() {
    if (process.server) {
      return
    }
    var el = this.$refs.el
    el.id = shortid.generate()
    this.elSelector = `#${el.id}`
    this.followPath()
  }
}

</script>

<style lang="scss" scoped="">
.Anime {
  position: relative;
}

.Box {
  
  height: 100px;
  width: 100px;
  z-index: 10;
  border-radius: 50px;
  margin: 0 auto;
  display: block;
}
</style>
