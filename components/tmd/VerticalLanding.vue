<template>
<div class="VerticalLanding">
  <TwoSidesDiv rightBackgroundColor="#EEEEEE">
    <div slot="child">
      <StartHeader></StartHeader>
    </div>
    <div slot="left"
         class="row row align-items-start m-0 p-0">
    </div>
    <div slot="right">
    </div>
  </TwoSidesDiv>
  <div class="row mt-5 p-5 justify-content-center">
    <div class="col-lg-12 m-0 mt-5 p-0">
      <CirclesSection></CirclesSection>
    </div>
  </div>
  <CenteredFakeChat></CenteredFakeChat>
  <Partners></Partners>

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
