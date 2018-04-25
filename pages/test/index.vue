<template>
<div class="ComponentName">
  <h2>Test</h2>
  <canvas class="w-100" resize="true"
          ref="canvas"></canvas>
  <div class="d-none"
       ref="images">
  </div>
</div>

</template>

<script>
var paper
import sequence from 'promise-sequential';
import parallel from 'promise-parallel';
import _ from 'lodash';
var shortid = require('shortid')
export default {
  name: 'ComponentName',
  props: [],
  fetch() {},
  data() {
    return {
    	images:[]
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
  	pickRandomImageId(){
  		return this.images[parseInt(Math.random()*this.images.length)]
  	},
    async preloadImages() {
      var self = this
      var exts = [
        10,
        3,
        4,
        5,
        8
      ]
      return await parallel(_.fill(Array(11), null).map((v, index) => {
          return (async() => {
            try {
              var ext = exts.indexOf(index + 1) !== -1 ? 'jpg' : 'png'
              let img = await self.preloadImage(`/benefitsIcons/${index + 1}.${ext}`)
              self.$refs.images.appendChild(img)
              self.images.push(img.id)
              return true
            } catch (err) {
              return err
            }
          })()
        }))
    },
    preloadImage(src) {
      return new Promise((resolve, reject) => {
        let img = new Image()
        img.id = shortid.generate()
        img.onload = () => resolve(img)
        img.onerror = () => reject(src)
        img.src = src
      })
    }
  },
  components: {

  },
  created() {},
  async mounted() {
    if (process.server) {
      return
    }

    await this.preloadImages()

    paper = require('paper')
    window.p = {}
    paper.install(window.p)
    paper.setup(this.$refs.canvas)
    

    var raster = new paper.Raster(this.pickRandomImageId());
	raster.position = paper.view.center;
	raster.scale(0.1);
	//raster.rotate(45);
	paper.view.viewSize.width = window.innerWidth
	raster.position.x = paper.view.viewSize.width


	var text = new paper.PointText(new paper.Point(30, 30));
	text.fillColor = 'black';
	text.content = 'Hello world';

    // Draw the view now:
    paper.view.draw()

    var dir = -1; //-1 or 10
    var vel = 50;
    var ace = 0;
    var angle = -1;
    var targets = [paper.view.size.height-50, 50]
    var target = targets[0]
    var newDir=()=>dir==-1?1:-1;
    var calcVel=()=> {
    	var v = (vel+ace)>topVel?topVel:(vel+ace)
    	return v<10?10:v;
    }
    var topVel = 50;
	var diff = 0 
    paper.view.onFrame = function(event) {
    	//count time delta
      	raster.position.x-= 15 * event.delta

      	diff = Math.abs(raster.position.y-target);
      	
      	if(Math.abs(raster.position.y-target)<10){
      		targets.push(targets.shift())
      		target = targets[0]
      		dir = newDir();
      		if(vel==topVel) {
      			ace = 0;
      		}else{
      			vel = 50;
      		}
      	}else{
      		//if(Math.abs(ace)<5){
      			ace = (15*topVel)/diff * (dir*-1)
      		//}
      	}
      	angle = dir==-1?-1:10;
      	text.content = `Vel ${vel.toFixed(0)} Ace ${ace.toFixed(0)} Dir ${dir} Angle ${angle} Target ${target} Diff ${diff.toFixed(0)}<10`
      	vel = calcVel();
      	
      	raster.position.y-= vel * Math.cos(0-Math.PI+angle) * event.delta
      
    }
  }
}

</script>

<style lang="scss" scoped="">
.ComponentName {}
</style>
