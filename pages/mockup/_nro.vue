<template>
<div class="MockupPage">
  <mHeader></mHeader>

  <!--    ####################################### SLIDE 1 -->
  <!--    ####################################### SLIDE 1 -->
  <!--    ####################################### SLIDE 1 -->
  <!--    ####################################### SLIDE 1 -->
  <!--    ####################################### SLIDE 1 -->
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

  <!--    ####################################### SLIDE 2 -->
  <!--    ####################################### SLIDE 2 -->
  <!--    ####################################### SLIDE 2 -->
  <!--    ####################################### SLIDE 2 -->
  <!--    ####################################### SLIDE 2 -->
  <div v-show="nro=='2'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat></chat>
        </div>
      </div>
      <div slot="right">
        <CenterBottomText top="150px;"
                          lineHeight="35px"
                          color="#B7B7B7">
          Discutez avec Chloé !
          <br> Elle trouvera toutes les aides financières auxquelles vous avez droit.
          <br> Elle fera même les démarches pour vous ;)
        </CenterBottomText>
      </div>
    </two-sides-div>
    
  </div>


  <!--    ####################################### SLIDE 3 -->
  <!--    ####################################### SLIDE 3 -->
  <!--    ####################################### SLIDE 3 -->
  <!--    ####################################### SLIDE 3 -->
  <!--    ####################################### SLIDE 3 -->
  <div v-show="nro=='3'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat>
            <ChatMessageBot>
              <p slot="message">
                Enchantée Julie ! Très joli prénom d’ailleurs ;)
              </p>
            </ChatMessageBot>
            <ChatMessageBot>
              <p slot="message">
                Je peux te demander si tu fais cette demande pour toi ou pour quelqu’un d’autre (ami, famille…) ?
              </p>
            </ChatMessageBot>
            <ChatMessageUser :isUser="true">
              <p slot="message">
                Pour moi
              </p>
            </ChatMessageUser>
            <ChatMessageBot>
              <p slot="message">
                OK ! Et tu fais quoi dans la vie ? Tu es étudiant ? tu travailles ? Tu es retraité ?
              </p>
            </ChatMessageBot>
            <div slot="options">
              <div class="row no-gutters justify-content-right">
                <div class="col-md-8 offset-md-4 mt-2">
                  <ChatOptionButton class="colx">Etudiant</ChatOptionButton>
                  <ChatOptionButton class="colxx">J’ai un emploi</ChatOptionButton>
                  <ChatOptionButton class="col">Retraité</ChatOptionButton>
                  <ChatOptionButton class="colx">Au chômage</ChatOptionButton>
                  <ChatOptionButton class="colx">Autre</ChatOptionButton>
                </div>
              </div>
            </div>
          </chat>
        </div>
      </div>
      <div slot="right">
        <CenterBottomText top="150px;"
                          size="45px"
                          lineHeight="55px"
                          color="#B7B7B7">
          368
          <br> Aides disponibles
        </CenterBottomText>
      </div>
    </two-sides-div>
    
  </div>
  <!--    ####################################### SLIDE 4 -->
  <!--    ####################################### SLIDE 4 -->
  <!--    ####################################### SLIDE 4 -->
  <!--    ####################################### SLIDE 4 -->
  <!--    ####################################### SLIDE 4 -->
  <div v-show="nro=='4'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat inputPlaceholder="Entre ta réponse...">
            <ChatMessageBot>
              <p slot="message">
                Quelle est ta date de naissance ?
              </p>
            </ChatMessageBot>
            <ChatMessageUser :isUser="true">
              <p slot="message">
                3 mars 1994
              </p>
            </ChatMessageUser>
            <ChatMessageBot>
              <p slot="message">
                Bravo ! A priori tu aurais droit à 4 aides financières. Le montant total pourrait même atteindre 10 650 € sur l’année :)
              </p>
            </ChatMessageBot>
            <ChatMessageBot>
              <p slot="message">
                Pour en être certain à 100 %, j’ai besoin de quelques infos supplémentaires
              </p>
            </ChatMessageBot>
            <ChatMessageBot>
              <p slot="message">
                Quelle est ton adresse mail ?
              </p>
            </ChatMessageBot>
          </chat>
        </div>
      </div>
      <div slot="right">
        <BenefitsCircles></BenefitsCircles>
      </div>
    </two-sides-div>
    
  </div>
  <!--    ####################################### SLIDE 5 -->
  <!--    ####################################### SLIDE 5 -->
  <!--    ####################################### SLIDE 5 -->
  <!--    ####################################### SLIDE 5 -->
  <!--    ####################################### SLIDE 5 -->
  <div v-show="nro=='5'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat inputPlaceholder="Entre ta réponse...">
            <ChatMessageBot>
              <p slot="message">
                Quelle est ta date de naissance ?
              </p>
            </ChatMessageBot>
          </chat>
        </div>
      </div>
      <div slot="right">
        <BenefitsCircles></BenefitsCircles>
      </div>
    </two-sides-div>
    
    <BenefitStatusModal></BenefitStatusModal>
  </div>
  <!--    ####################################### SLIDE 6 -->
  <!--    ####################################### SLIDE 6 -->
  <!--    ####################################### SLIDE 6 -->
  <!--    ####################################### SLIDE 6 -->
  <!--    ####################################### SLIDE 6 -->
  <div v-show="nro=='6'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat inputPlaceholder="Entre ta réponse...">
            <ChatMessageBot>
              <p slot="message">
                Quelle est ton adresse e-mail ?
              </p>
            </ChatMessageBot>
            <ChatMessageUser>
              <p slot="message">
                lisa@gmail.com
              </p>
            </ChatMessageUser>
            <ChatMessageBot>
              <p slot="message">
                Quel est le montant de ton revenu global brut 2016
              </p>
            </ChatMessageBot>
            <ChatMessageUser>
              <p slot="message">
                16 320 €
              </p>
            </ChatMessageUser>
            <ChatMessageBot>
              <p slot="message">
                Quel est ton nom de famille ?
              </p>
            </ChatMessageBot>
          </chat>
        </div>
      </div>
      <div slot="right">
        <BenefitsCircles>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="92"
                           text="Bourse sur critères sociaux - CROUS"
                           price="0 € - 6 500 €">
              Dossier complété:
            </CircleBenefit>
          </div>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="96"
                           borderColor="#FC5D60"
                           text="Aide à l’installation AILE"
                           price="900 €">Dossier complété:</CircleBenefit>
          </div>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="94"
                           borderColor="rgb(229, 228, 234)"
                           text="Aide au logement CAF"
                           price="1 200 € - 2 500 €">Dossier complété:</CircleBenefit>
          </div>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="88"
                           borderColor="rgb(229, 100, 200)"
                           text="Aide à la mobilité RATP"
                           price="750 €">Dossier complété:</CircleBenefit>
          </div>
        </BenefitsCircles>
      </div>
    </two-sides-div>
    
  </div>
  


  <!-- 		#######################################	SLIDE 7 -->
  <!-- 		#######################################	SLIDE 7 -->
  <!-- 		#######################################	SLIDE 7 -->
  <!-- 		#######################################	SLIDE 7 -->
  <!-- 		#######################################	SLIDE 7 -->
  <div v-show="nro=='7'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat inputPlaceholder="Entre ta réponse..." :hideInput="true">
            <ChatMessageBot>
              <p slot="message">
                Quel est le montant de ton revenu global brut 2016
              </p>
            </ChatMessageBot>
            <ChatMessageUser>
              <p slot="message">
                16 320 €
              </p>
            </ChatMessageUser>
            <ChatMessageBot>
              <p slot="message">
                Bravo ! Tu vas pouvoir toucher ces 4 aides pour un montant total de 6 950 € !
              </p>
            </ChatMessageBot>
            <ChatMessageBot>
              <p slot="message">
                C’est bientôt terminé. Pour que les dossiers soient complets à 100%, il ne reste plus qu’à joindre 3 documents.
              </p>
            </ChatMessageBot>
            <ChatMessageBot>
              <p slot="message">
                Pas d’inquiétude, je me charge de toutes les démarches avec chaque organisme ;)
              </p>
            </ChatMessageBot>
            <div slot="bottom">
            	<div class="row no-gutters justify-content-center">
            		<div class="col-10 offset-2 m-0 p-0 mt-5">
            			<b-btn class="w-100 d-block ml-2 mr-2" variant="primary" size="lg">CONTINUER</b-btn>
            		</div>
            	</div>
            </div>
          </chat>
        </div>
      </div>
      <div slot="right">
        <BenefitsCircles>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="98"
                           :passed="true"
                           text="Bourse sur critères sociaux - CROUS"
                           price="0 € - 6 500 €">
              Dossier complété:
            </CircleBenefit>
          </div>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="96"
                           :passed="true"
                           borderColor="#FC5D60"
                           text="Aide à l’installation AILE"
                           price="900 €">Dossier complété:</CircleBenefit>
          </div>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="94"
                           :passed="true"
                           borderColor="rgb(229, 228, 234)"
                           text="Aide au logement CAF"
                           price="1 200 € - 2 500 €">Dossier complété:</CircleBenefit>
          </div>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="97"
                           :passed="true"
                           borderColor="rgb(229, 100, 200)"
                           text="Aide à la mobilité RATP"
                           price="750 €">Dossier complété:</CircleBenefit>
          </div>
        </BenefitsCircles>
      </div>
    </two-sides-div>
  </div>

  <!-- 		#######################################	SLIDE 8 -->
  <!-- 		#######################################	SLIDE 8 -->
  <!-- 		#######################################	SLIDE 8 -->
  <!-- 		#######################################	SLIDE 8 -->
  <!-- 		#######################################	SLIDE 8 -->
  <div v-show="nro=='8'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat inputPlaceholder="Entre ta réponse..." :hideInput="true">
            <ChatMessageBot>
              <p slot="message">
                Quel est le montant de ton revenu global brut 2016
              </p>
            </ChatMessageBot>
            <ChatMessageUser>
              <p slot="message">
                16 320 €
              </p>
            </ChatMessageUser>
            <ChatMessageBot>
              <p slot="message">
                Bravo ! Tu vas pouvoir toucher ces 4 aides pour un montant total de 6 950 € !
              </p>
            </ChatMessageBot>
            <ChatMessageBot>
              <p slot="message">
                C’est bientôt terminé. Pour que les dossiers soient complets à 100%, il ne reste plus qu’à joindre 3 documents.
              </p>
            </ChatMessageBot>
            <ChatMessageBot>
              <p slot="message">
                Pas d’inquiétude, je me charge de toutes les démarches avec chaque organisme ;)
              </p>
            </ChatMessageBot>
            <div slot="bottom">
            	<div class="row no-gutters justify-content-center">
            		<div class="col-10 offset-2 m-0 p-0 mt-5">
            			<b-btn class="w-100 d-block ml-2 mr-2" variant="primary" size="lg">CONTINUER</b-btn>
            		</div>
            	</div>
            </div>
          </chat>
        </div>
      </div>
      <div slot="right">
        <BenefitsCircles>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="98"
                           :passed="true"
                           text="Bourse sur critères sociaux - CROUS"
                           price="0 € - 6 500 €">
              Dossier complété:
            </CircleBenefit>
          </div>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="96"
                           :passed="true"
                           borderColor="#FC5D60"
                           text="Aide à l’installation AILE"
                           price="900 €">Dossier complété:</CircleBenefit>
          </div>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="94"
                           :passed="true"
                           borderColor="rgb(229, 228, 234)"
                           text="Aide au logement CAF"
                           price="1 200 € - 2 500 €">Dossier complété:</CircleBenefit>
          </div>
          <div class="col-lg-6 mt-5">
            <CircleBenefit :value="97"
                           :passed="true"
                           borderColor="rgb(229, 100, 200)"
                           text="Aide à la mobilité RATP"
                           price="750 €">Dossier complété:</CircleBenefit>
          </div>
        </BenefitsCircles>
      </div>
    </two-sides-div>
    
    <OrderCheckout></OrderCheckout>
  </div>


   <!--     ####################################### SLIDE 9 -->
  <!--    ####################################### SLIDE 9 -->
  <!--    ####################################### SLIDE 9 -->
  <!--    ####################################### SLIDE 9 -->
  <!--    ####################################### SLIDE 9 -->
  <div v-show="nro=='9'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat inputPlaceholder="Entre ta réponse..." :hideInput="false">
            
          </chat>
        </div>
      </div>
      <div slot="right">
        
      </div>
    </two-sides-div>
    
    <OrderCheckoutInfo></OrderCheckoutInfo>
  </div>

   <!--     ####################################### SLIDE 10 -->
  <!--    ####################################### SLIDE 10 -->
  <!--    ####################################### SLIDE 10 -->
  <!--    ####################################### SLIDE 10 -->
  <!--    ####################################### SLIDE 10 -->
  <div v-show="nro=='10'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <chat inputPlaceholder="Entre ta réponse..." :hideInput="false">
            
          </chat>
        </div>
      </div>
      <div slot="right">
        
      </div>
    </two-sides-div>
    
    <OrderCheckoutPayment></OrderCheckoutPayment>
  </div>

  <DashboardMockups :nro="nro"></DashboardMockups>

  <b-btn @click="moveSlide(-1)"
         class="PrevButton"
         variant="primary"
         size="xs">Prev slide</b-btn>
<b-btn to="/mockup"
         class="IndexButton"
         variant="primary"
         size="xs">Index</b-btn>
  <b-btn @click="moveSlide(1)"
         class="NextButton"
         variant="primary"
         size="xs">Next slide</b-btn>
</div>

</template>

<script>
import DashboardMockups from '@/components/tmd/DashboardMockups';
import CircleBenefit from '@/components/tmd/CircleBenefit';
import OrderCheckoutPayment from '@/components/tmd/OrderCheckoutPayment';
import OrderCheckoutInfo from '@/components/tmd/OrderCheckoutInfo';
import OrderCheckout from '@/components/tmd/OrderCheckout';
import BenefitStatusModal from '@/components/tmd/BenefitStatusModal';
import { SimpleModal, SimpleModalBackdrop } from '@/styledComponents/modal';
import ChatOptionButton from '@/components/tmd/ChatOptionButton';
import ChatMessageBot from '@/components/tmd/ChatMessageBot';
import ChatMessageUser from '@/components/tmd/ChatMessageUser';
import Partners from '@/components/tmd/landing/Partners';
import StartHeader from '@/components/tmd/StartHeader';
import CirclesSection from '@/components/tmd/CirclesSection';
import BenefitsCircles from '@/components/tmd/BenefitsCircles';
import CenterBottomText from '@/components/tmd/CenterBottomText';
import Chat from '@/components/tmd/Chat';
import MHeader from '@/components/tmd/Header';
import TwoSidesDiv from '@/components/tmd/TwoSidesDiv';
import AppFooter from '@/components/tmd/landing/layout/Footer';
export default {
  middleware:['auth'],
  layout:'public',
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
    moveSlide(v) {
      try {
        let url = location.href.replace(location.origin, '')
        let number = url.substring(url.lastIndexOf('/') + 1)
        number = parseInt(number, 10) + v
        if (number > 14) {
          number = 1
        }
        if(number<1){
          number = 14
        }
        this.$router.push('/mockup/' + number)
      } catch (err) {
        console.error(err)
      }
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
    Partners,
    ChatMessageBot,
    ChatMessageUser,
    ChatOptionButton,
    BenefitsCircles,
    SimpleModal,
    SimpleModalBackdrop,
    BenefitStatusModal,
    CircleBenefit,
    OrderCheckout,
    OrderCheckoutInfo,
    OrderCheckoutPayment,
    DashboardMockups
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
  z-index: 999999999;
  opacity:0.4;
}
.PrevButton {
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 999999999;
  opacity:0.4;
}
.IndexButton:hover,.PrevButton:hover,.NextButton:hover{
  opacity: 1;
}
.IndexButton{
  opacity:0.4;
  position: fixed;
  bottom: 10px;
  left: 45%;
  z-index: 999999999; 
}
</style>
