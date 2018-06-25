<template>
<div class="LandingTransactionItem  animated"
     ref="wrapper"
     :style="css">
  <div class="row no-gutters justify-content-center align-items-center">
    <div class="col-6 col-md-4 text-center align-self-center">
      <i :class="paperClass"
         ref="paper"></i>
    </div>
    <div class="col-6 col-md-4 text-center align-self-center">
      <LandingBenefitItem :item="benefitItem"></LandingBenefitItem>
    </div>
  </div>
  <div class="row no-gutters"
       v-if="false">
    <p>Life is <span v-html="life"></span>%</p>
    <p v-html="css"></p>
  </div>
</div>

</template>

<script>
import anime from 'animejs';
import LandingBenefitItem from '@/components/LandingBenefitItem';
import { getRandomItem } from '@/plugins/tmaBenefits';
import $ from 'jquery';
export default {
  name: 'LandingTransactionItem',
  props: [
    'uniqueId'
  ],
  fetch() {},
  data() {
    return {
      timeoutStart: Date.now(),
      timeout: 0,
      interval: null,
      diff: null,
      lowLifeEmitted: false,
      bgColor: this.getRandomColor(),
      benefitItem: getRandomItem(),
      showLines: false
    }
  },
  async asyncData() {
    return {}
  },
  computed: {
    paperClass() {
      return `far ${this.showLines ? 'fa-file-alt' : 'fa-file'} Icon Paper`
    },
    life() {
      if (!this.diff) {
        return 100
      }
      return (100 - ((this.diff / this.timeout) * 100)).toFixed(0)
    },
    css() {
      // return `background-color:${this.bgColor}`
      return ''
    }
  },
  methods: {
    getRandomColor() {
      var list = [
        'darkgrey',
        'grey'
      ]
      return list[parseInt(Math.random() * list.length, 10)]
    },
    animatePaper() {
      var self = this

      setTimeout(()=>self.showLines = true,3000)

      var cssProperties = anime({
        targets: this.$refs.paper,
        // opacity: .5,


        translateY: [

        {
            value: '70%',
            duration: 0,
            delay: 2000
        },
        {
            value: '15%',
            duration: 600
        }
        ],
        left: [
          {
            value: '-150%',
            duration: 0,
            delay: 2000
          },
          {
            value: '-85%',
            duration: 0,
            delay: 1500
          },
          {
            value: '11%',
            duration: 1500,
            delay: 0
          }
        ],
        scale: [
          {
            value: 1.2,
            delay:2850,
            duration: 200
          },
          {
            value: 1,
            delay:0,
            duration: 200
          },
          {
            value: 0.7,
            delay:500,
            duration: 1500
          },
          {
            value: 0.9,
            delay:0,
            duration: 200
          },
          {
            value: 0.7,
            delay:0,
            duration: 200
          }
        ],
        color: [
          {
            value: '#FFF',
            duration: this.timeout
          }
        ],
        easing: 'easeInOutQuad',
        rotate: [
          {
            value: '20deg',
            delay: 4000,
            duration: 1000
          } // ,
        // {value:'360deg',duration:2000}
        ],
        duration: this.timeout,
        loop: false
      })
    }
  },
  components: {
    LandingBenefitItem
  },
  created() {},
  destroyed() {
    clearInterval(this.interval)
  },
  mounted() {
    var self = this
    self.timeoutStart = Date.now()
    var duration = self.timeout = 6500 // parseInt(Math.random()*10)*1000
    if (!process.server) {
      setTimeout(() => {
        return
        $(self.$refs.wrapper).removeClass('fadeInDown').animate({
          opacity: 0,
        // height:0,
        // padding:0
        }, duration / 2)
      }, duration / 2)

      self.interval = setInterval(function() {
        self.diff = Date.now() - self.timeoutStart
        if (self.diff >= (duration - 1000) && !self.lowLifeEmitted) {
          self.lowLifeEmitted = true
          self.$emit('lowLife')
        }
      }, 50)

      setTimeout(() => {
        self.$emit('remove', self.uniqueId)
      }, duration)

      self.animatePaper()

    }
  }
}

</script>

<style lang="scss" scoped="">
.LandingTransactionItem {
  min-height: 100px;
  width: 650px;
}

.Icon {
  color: darkgrey;
}

.Chat {
  min-height: 70px;
}

.Paper {
  font-size: 50px;
  position: relative;
  color:white;
}

.Chat p {
  margin: 0px;
  padding: 0px;
  line-height: 70px;
}
</style>
