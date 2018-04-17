<template>
<div class="VerticalLanding">
  <StartHeader>
    <CenteredFakeChat></CenteredFakeChat>
  </StartHeader>

  <LandingSection title="How it works" :inverted="true">
      <HowWorksSection></HowWorksSection>
  </LandingSection>

  <LandingSection title="Technologies">
    <TechnologiesCards></TechnologiesCards>
  </LandingSection>

  <LandingSection title="Also" :css="'background-color:white;'">
    <HowWorksSection></HowWorksSection>
  </LandingSection>

  <LandingSection title="Benefits" :inverted="true">
    <CirclesSection></CirclesSection>
  </LandingSection>

  
  <Partners :callToAction="false"></Partners>
</div>

</template>

<script>
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
    HowWorksSection
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.VerticalLanding {}
article img{
  margin:0 auto;
  display:block;
}
article{
  min-height: 420px;
}
</style>
