<template>
<div class="VerticalLanding">
  <StartHeader>
    <CenteredFakeChat></CenteredFakeChat>
  </StartHeader>
  <HowItWorks></HowItWorks>
  
  <LandingSection title=""
                  :css="'background-color:#212431;position:relative;z-index:20;'">
    <LandingStats :one="4000"
                  :two="2000"
                  :three="12000000000"></LandingStats>
  </LandingSection>
  <DropboxSeparatorBar></DropboxSeparatorBar>
  <Partners :callToAction="false"></Partners>
</div>

</template>

<script>
import FloatingBenefits from '@/components/FloatingBenefits';
import HowItWorks from '@/components/HowItWorks';
import DropboxSeparatorBar from '@/components/DropboxSeparatorBar';
import LandingStats from '@/components/LandingStats';
import HowWorksSection from '@/components/HowWorksSection';
import TechnologiesCards from '@/components/TechnologiesCards';
import LandingSection from '@/components/tmd/LandingSection';
import FloatingCircles from '@/components/tmd/FloatingCircles';
import Partners from '@/components/tmd/landing/Partners';
import CenteredFakeChat from '@/components/tmd/CenteredFakeChat';
import CirclesSection from '@/components/tmd/CirclesSection';
import StartHeader from '@/components/tmd/StartHeader';
import TwoSidesDiv from '@/components/tmd/TwoSidesDiv';
export default {
  name: 'VerticalLanding',
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
    CirclesSection,
    StartHeader,
    TwoSidesDiv,
    Partners,
    CenteredFakeChat,
    FloatingCircles,
    LandingSection,
    TechnologiesCards,
    HowWorksSection,
    LandingStats,
    DropboxSeparatorBar,
    HowItWorks,
    FloatingBenefits
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.VerticalLanding {}

article img {
  margin: 0 auto;
  display: block;
}

article {
  min-height: 420px;
}
</style>
