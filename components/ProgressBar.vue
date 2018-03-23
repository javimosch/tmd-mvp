<template>
<div>
  <div class="meter m-0 p-0">
    <span :style="style">
  				<p class="m-0 p-1 pl-3 pr-3 text-center" v-html="valueAsString"></p>
  			</span>
  </div>
</div>

</template>

<script>
var VueMixinTween = null;
var cmp = {
  name: 'ProgressBar',
  props: [
    'value'
  ],
  watch: {
    value(v) {
      this.currentValue = v || 0
    }
  },
  data() {
    return {
      currentValue: (this.value || 0)
    }
  },
  mounted() {
    this.currentValue = (this.value || 0)
  },
  name: 'ProgressBar',
  computed: {
    currentValueRound() {
      return parseInt(this.currentValueTween || this.currentValue, 10).toFixed(0)
    },
    valueAsString() {
      return `${this.currentValueRound}%`
    },
    style() {
      return `width: ${this.currentValueRound}%`
    }
  }

}
if (typeof window !== 'undefined') {
  VueMixinTween = require('vue-mixin-tween').default;
  cmp.mixins = [
    VueMixinTween('currentValue', 1000, (pos) => pos)
  ];
}
export default cmp;

</script>

<style lang="scss" scoped="">
.meter {
  margin: 0px;
  padding: 0px;
  position: relative;
  background: $color1;
  -moz-border-radius: 25px;
  -webkit-border-radius: 25px;
  border-radius: 25px;
  padding: 10px;
}

.meter>span {
  display: block;
  height: 100%;
  -webkit-border-top-right-radius: 8px;
  -webkit-border-bottom-right-radius: 8px;
  -moz-border-radius-topright: 8px;
  -moz-border-radius-bottomright: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  -webkit-border-top-left-radius: 20px;
  -webkit-border-bottom-left-radius: 20px;
  -moz-border-radius-topleft: 20px;
  -moz-border-radius-bottomleft: 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: relative;
  overflow: hidden;
  background-color: $color3;
  color: white;
}
</style>
