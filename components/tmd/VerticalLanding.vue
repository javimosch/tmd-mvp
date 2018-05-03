<template>
<div class="VerticalLanding">
  <StartHeader>
    <HowItWorks></HowItWorks>  
  </StartHeader>
  
  <CenteredFakeChat ></CenteredFakeChat>
  
  <LandingSection class="p-5 mb-5 d-none d-lg-block" title="Laissez-nous faire les démarches"
:css="'background-color:#105BB1;position:relative;min-height: 300px;'"
:titleStyle="`max-width: 992px;
  line-height: 40px;
  font-size: 35px;
  color:white;
  padding: 15px;
  margin: 20px auto 10px auto;
  font-weight: 300;
  letter-spacing: 3px;

  `"
  :titleId="'laissez-nous-faire-les-demarches'"
  >
  
    
    <div class="row no-gutters justify-content-center align-items-center">
      <div class="col-12 col-md-10 mb-4">
        <p style="font-size:20px;text-align:center;color:white;">Pour chaque aide, une demande pourra être envoyée au bon organisme, sans que vous n’ayez rien à faire.<br> Aucune paperasse !</p>
      </div>
      <div class="col-12">
        <LandingTransactions></LandingTransactions>
      </div>
    </div>

    
  </LandingSection>

  <LandingSection class="p-5 mb-5 d-none d-lg-block" title="Recevez l'argent"
:css="'background-color:white;position:relative;min-height: 300px;'"
:titleStyle="`max-width: 992px;
  line-height: 40px;
  font-size: 35px;
  color:#a9a9a9;
  padding: 15px;
  margin: 20px auto 50px auto;
  font-weight: 300;
  letter-spacing: 3px;

  `"
  :titleId="'recevez-l-argent'"
  >



    <div class="row no-gutters justify-content-center align-items-center">
      <div class="col-12 col-md-10 mb-4">
        <p style="font-size:20px;text-align:center;color:darkgrey;font-weight: 400;">L’argent vous sera versée directement sur votre compte. Des petits frais de dossiers seront alors prélevés sans que vous n’ayez rien à avancer.</p>
      </div>
    </div>
  </LandingSection>

 <LandingBenefits></LandingBenefits>

 <FranceMap></FranceMap>
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
                  :css="'background-color:#383838;position:relative;z-index:20;'">
    <LandingStats :one="4000"
                  :two="2000"
                  :three="12000000000"></LandingStats>
  </LandingSection>
  
  <Partners :callToAction="false"></Partners>
</div>

</template>

<script>

import LandingTransactions from '@/components/LandingTransactions';
import FranceMap from '@/components/FranceMap';
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
    LandingBenefits,
    FranceMap,
    LandingTransactions
  },
  created() {},
  mounted() {
    if(process.server) return;



    
  }
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
