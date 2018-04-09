<template>
<div class="MockupPage">
  <mHeader></mHeader>
  <div v-show="nro=='1'">
    
    <two-sides-div rightBackgroundColor="#EEEEEE">
    	<div slot="child">
    		<StartHeader></StartHeader>
    	</div>
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        
      </div>
      <div slot="right">
        
      </div>
    </two-sides-div>
    <div class="row mt-5 p-5 justify-content-center">
      <div class="col-lg-12 m-0 mt-5 p-0">
        <CirclesSection></CirclesSection>
      </div>
    </div>
    <Partners></Partners>
    <app-footer></app-footer>
  </div>
  <div v-show="nro=='2'">
    <two-sides-div rightBackgroundColor="#0A45B1">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat></chat>
        </div>
      </div>
      <div slot="right">
        <CenterBottomText top="150px;"
                          lineHeight="35px">
          Discutez avec Chloé !
          <br> Elle trouvera toutes les aides financières auxquelles vous avez droit.
          <br> Elle fera même les démarches pour vous ;)
        </CenterBottomText>
      </div>
    </two-sides-div>
    <app-footer></app-footer>
  </div>
  <b-btn @click="nextSlide"
         class="NextButton"
         variant="primary"
         size="lg">Next slide</b-btn>
</div>

</template>

<script>
import Partners from '@/components/tmd/landing/Partners';
import StartHeader from '@/components/tmd/StartHeader';
import CirclesSection from '@/components/tmd/CirclesSection';
import CenterBottomText from '@/components/tmd/CenterBottomText';
import Chat from '@/components/tmd/Chat';
import MHeader from '@/components/tmd/Header';
import TwoSidesDiv from '@/components/tmd/TwoSidesDiv';
import AppFooter from '@/components/tmd/landing/layout/Footer';
export default {
  name: 'MockupPage',
  props: [],
  fetch() {},
  async asyncData() {
    return {}
  },
  computed: {
    nro() {
      return this.$store.state.route && this.$store.state.route.params && this.$store.state.route.params.nro
    }
  },
  methods: {
    nextSlide() {
      try {
        let url = location.href.replace(location.origin, '')
        let number = url.substring(url.lastIndexOf('/')+1)
        number = parseInt(number) + 1
        if(number>11) number = 1;
        this.$router.push('/mockup/' + number)
      } catch (err) {console.error(err);}
    }
  },
  components: {
    StartHeader,
    Chat,
    MHeader,
    TwoSidesDiv,
    CenterBottomText,
    AppFooter,
    CirclesSection,
    Partners
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.parner_logo {
  width: 200px;
  margin: 0 auto;
  display: block;
}

.NextButton {
  position: fixed;
  bottom: 10px;
  right: 10px;
}
</style>
