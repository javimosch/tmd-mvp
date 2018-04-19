<template>
<div class="FloatingBenefits">
  <LandingSection title="Benefits"
                  :css="'background-color:white;'"
                  class="FloatingBenefitsSection"
                  data-rellax-speed="1">
    <div class="row">
      <div class="col"
           v-for="(item,key) in icons"
           :key="key">
        <Anime :icon="item.image"
               :position="key"></Anime>
      </div>
    </div>
  </LandingSection>
</div>

</template>

<script>
import LandingSection from '@/components/tmd/LandingSection';
import { startParallax } from '@/plugins/parallax';
import Anime from '@/components/Anime';
export default {
  name: 'FloatingBenefits',
  props: [],
  fetch() {},
  data() {
    return {
      icons: []
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {

  },
  components: {
    Anime,
    LandingSection
  },
  created() {},
  mounted() {
    startParallax('.FloatingBenefitsSection')
    if (!process.server) {
      var jpg = [
        3,
        4,
        5,
        8,
        10
      ]
      var icons = []
      for (var x = 1; x <= 11; x++) {
        icons.push({
          image: `/benefitsIcons/${x}.${jpg.indexOf(x) !== -1 ? 'jpg' : 'png'}`
        })
      }
      this.icons = icons
    }
  }
}

</script>

<style lang="scss" scoped="">
.FloatingBenefits {}
</style>
