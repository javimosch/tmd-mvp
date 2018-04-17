<template>
<div class="CircleBenefit">
  <img class="CheckedImage" v-show="passed" :src="CheckedImage"/>
  <div class="Circle"
       ref="el">

    <div class="CircleContent">
      
      <div class="CircleContentMiddle"
           :style="ContentStyle">
        <p>Dossier complété:</p>
        <div v-html="value+'%'">100%</div>
      </div>
    </div>
    <slot name="text"
          class="BottomText">
      	<span v-html="text||'Bourse sur critères sociaux - CROUS'"></span>
        <br>
		<strong v-html="price||'0 € - 6 500 €'"></strong>
    </slot>
  </div>
</div>

</template>

<script>
var $ = null
if (typeof window !== 'undefined') {
  require('jquery-circle-progress')
  $ = require('jquery')
}
import CheckedImage from '@/assets/checked.svg'
export default {
  name: 'CircleBenefit',
  props: [
    'passed',
    'text',
    'price',
    'borderColor',
    'bgColor',
    'color',
    'size',
    'border',
    'value'
  ],
  fetch() {},
  data(){
    return {
      CheckedImage
    }
  },
  async asyncData() {
    return {}
  },
  computed: {
    ContentStyle() {
      let style = ''
      if (this.bgColor) {
        style += 'background-color:' + this.bgColor + ';'
      }
      if (this.color) {
        style += 'color:' + this.color + ';'
      }
      return style
    }
  },
  methods: {

  },
  components: {

  },
  created() {},
  watch: {
    value(v) {
      $(this.$refs.el).circleProgress({
        value: v ? v / 100 : 1
      })
    }
  },
  mounted() {
    if (typeof window === 'undefined') {
      return
    }
    $(this.$refs.el).circleProgress({
      value: this.value ? this.value / 100 : 1,
      size: 200,
      fill: {
        startAngle: 90,
        //color: this.borderColor ? this.borderColor : '#0A45B1',
        color:'orange'
      }
    })

  }
}

</script>

<style lang="scss" scoped="">
.Circle {
  width: 200px;
  margin: 0px;
  position: relative;
  text-align: center;
  vertical-align: top;
}

.CircleContent {
  position: absolute;
  top: 20%;
  width: 100%;
  height: 120px;
  background: transparent;
  padding: 0px 20px;
  display: table;
}

.CircleContentMiddle {
  display: table-cell;
  vertical-align: middle;
}

.CircleBenefit {
  display: block;
  margin: 0 auto;
  width: 200px;
      position: relative;
}
.CheckedImage{
      position: absolute;
    width: 160px;
    border-radius: 100px;
    padding: 23px 50px 50px 50px;
    z-index: 4;
    opacity: 1;
    left: 20px;
}
.BottomText {}
</style>
