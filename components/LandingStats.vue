<template>
<div class="LandingStats ">
  <ScrollContainer @change="change">
    <ScrollItem id="LandingStats">
      <div class="row no-gutters justify-content-center">
        <div class="col-12 col-md-4">
          <h2 class="text-center"
              v-html="number1"></h2>
          <p class="text-center">aides pour les particuliers</p>
        </div>
        <div class="col-12 col-md-4">
          <h2 class="text-center"
              v-html="number2"></h2>
          <p class="text-center">aides pour les professionnels</p>
        </div>
        <div class="col-12 col-md-4">
          <h2 class="text-center"
              v-html="number3"></h2>
          <p class="text-center">non réclamés / an</p>
        </div>
      </div>
    </ScrollItem>
  </ScrollContainer>
</div>

</template>

<script>
import { ScrollContainer, ScrollItem } from 'vue-scrollmonitor';
import { tweenToFixedNumber } from '@/plugins/tween';
export default {
  name: 'LandingStats',
  props: [
    'one',
    'two',
    'three'
  ],
  fetch() {},
  data() {
    return {
      number1: 0,
      number2: 300,
      number3: 400
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
    nFormatter: function(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + ' Milliards €'
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
      }
      return num
    },
    numberWithSpaces: (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    },
    change(state) {
      if (state && state.LandingStats && state.LandingStats.isFullyInViewport) {
        var self = this
        tweenToFixedNumber(this.$data, 'number1', this.one || 500, {
          format:v=>self.numberWithSpaces(v.toFixed(0))
        })
        tweenToFixedNumber(this.$data, 'number2', this.two || 500, {
          format:v=>self.numberWithSpaces(v.toFixed(0))
        })
        tweenToFixedNumber(this.$data, 'number3', this.three || 500, {
          format: v => self.number3 = self.nFormatter(v.toFixed(0))
        })
      }
    }
  },
  components: {
    ScrollContainer,
    ScrollItem
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.LandingStats {
  padding:100px 0px;
}

h2,
p {
  color: white;
}

h2 {
  font-size: 40px;
  padding: 0px;
}
</style>
