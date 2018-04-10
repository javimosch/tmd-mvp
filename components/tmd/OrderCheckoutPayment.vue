<template>
<div class="OrderCheckoutPayment ">
  <simple-modal-backdrop v-show="true"
                         style="background-color:rgba(0,0,0,0.5)"></simple-modal-backdrop>
  <AbsoluteModal v-show="true"
                class="AbsoluteModal pl-5 pr-5 pt-5">
    <h3 class="text-center">
    		Finalisation des dossiers

		</h3>
    <div class="row no-gutters">
      <div class="col-lg-4 offset-lg-8 mt-0">
        <h6 class="text-right">Frais de dossiers</h6>
      </div>
    </div>
    <OrderCheckoutLine :checked="false"
                       amount="3 500"
                       text="Bourse sur critères sociaux (CROUS)"
                       price="8"></OrderCheckoutLine>
    <OrderCheckoutLine :checked="false"
                       amount="900"
                       text="Aide à l’installation (AILE)"
                       price="4"></OrderCheckoutLine>
    <OrderCheckoutLine :checked="false"
                       amount="1 800"
                       text="Aide au logement (CAF)"
                       price="7"></OrderCheckoutLine>
    <OrderCheckoutLine :checked="false"
                       amount="750"
                       text="Aide à la mobilité (RATP)"
                       price="5"></OrderCheckoutLine>
    <hr class="mt-2 mb-3">
    <div class="row justify-content-center">
      <div class="col-md-12 col-lg-2 mt-0">
      </div>
      <div class="col-md-12 col-lg-2 mt-0">
        <p class="text-right font-weight-bold"><span>6 950</span> €</p>
      </div>
      <div class="col-md-12 col-lg-5 mt-0">
      </div>
      <div class="col-md-12 col-lg-3 mt-0">
        <p class="text-right font-weight-bold"><span>24</span> €</p>
      </div>
    </div>
    <div class="row  justify-content-center">
      
      <div class="col-12 m-0 p-0 mt-3">
        <StripeCardElement></StripeCardElement>
      </div>
      
     </div>
     <div class="row  justify-content-center mt-2">
      <div class="col-12 col-lg-3 m-0 p-0 mt-3">
        <CircleWithText size="220px" bg="#5EDAAA">
        	<p class="p-4 d-block">92 % de dossiers acceptés
<br>
72 % si vous le faites vous-même.</p>
        </CircleWithText>
      </div>
      <div class="col-12 col-lg-3 m-0 p-0 mt-3">
        <CircleWithText size="220px" bg="#5EDAAA">
        	<p class="p-4 d-block">Vous pourrez vérifier et modifier les dossiers avant leur envoi
.</p>
        </CircleWithText>
      </div>
      <div class="col-12  m-0 p-0 mt-5">
      	<p class="text-center">
      		Les documents à joindre pourront être téléchargés ensuite - 
      		<a href="#">Plus d’informations</a>
      	</p>
      </div>
    </div>
  </AbsoluteModal>
</div>

</template>

<script>
import StripeCardElement from '@/components/StripeCardElement';
import CircleWithText from '@/components/tmd/CircleWithText';
import NoSSR from 'vue-no-ssr';
import OrderCheckoutLine from '@/components/tmd/OrderCheckoutLine';
import { SimpleModal, AbsoluteModal, SimpleModalBackdrop } from '@/styledComponents/modal';
export default {
  name: 'OrderCheckoutPayment',
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
    SimpleModal,
    SimpleModalBackdrop,
    'no-ssr': NoSSR,
    OrderCheckoutLine,
    CircleWithText,
    StripeCardElement,
    AbsoluteModal
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.OrderCheckoutPayment {}
.AbsoluteModal{
  min-height: 800px;
}
h3 {
  color: $color3;
}
</style>
