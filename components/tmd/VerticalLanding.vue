<template>
<div class="VerticalLanding">
  <StartHeader>
    <CenteredFakeChat></CenteredFakeChat>
  </StartHeader>
  
  <CirclesSection></CirclesSection>
  <Partners :callToAction="false"></Partners>
</div>

</template>

<script>
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
    CenteredFakeChat
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.VerticalLanding {}
</style>
