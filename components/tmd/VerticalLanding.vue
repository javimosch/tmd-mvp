<template>
<div class="VerticalLanding">
  <StartHeader>
    <CenteredFakeChat></CenteredFakeChat>
  </StartHeader>
  <HowItWorks></HowItWorks>


 <LandingBenefits></LandingBenefits>
<!--
  <LandingSection class="p-5" title="Web Application Technologies" :css="'background-color:white;position:relative;z-index:20;'">
      <div class="row mb-5">
        <div class="col-12 d-flex justify-content-center align-items-center" >
          <ul class="list-group mx-auto d-block" style="max-width: 600px">
            <li class="list-group-item">
              <h4>Progresive Web Application</h4>
              <p>
                Aujourd'hui, Chrome compte plus d'un milliard d'utilisateurs mensuels et le web mobile représente 8,9 millions de visiteurs uniques par mois aux États-Unis comparé au 3,3 millions pour les applications. Nous utilisons donc de plus en plus nos smartphones mais téléchargeons de moins en moins d'applications. C'est ce paradoxe qui a sans doute motivé les géants du web à développer ce format. Google, Microsoft ou Opera ont déjà tous déclaré que les progressive web apps sont le futur du mobile. 
              </p>
            </li>
            <li class="list-group-item">
              <h4>BaaS Backend</h4>
            </li>
          </ul>
        </div>
      </div>
  </LandingSection>
  -->
  <LandingSection title=""
                  :css="'background-color:dimgrey;position:relative;z-index:20;'">
    <LandingStats :one="4000"
                  :two="2000"
                  :three="12000000000"></LandingStats>
  </LandingSection>
  <DropboxSeparatorBar></DropboxSeparatorBar>
  <Partners :callToAction="false"></Partners>
</div>

</template>

<script>
import LandingBenefits from '@/components/LandingBenefits';
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
    FloatingBenefits,
    LandingBenefits
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
