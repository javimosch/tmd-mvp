<template>
<div class="DashboardMockups container mx-auto">
  <!--    ####################################### SLIDE 11 -->
  <!--    ####################################### SLIDE 11 -->
  <!--    ####################################### SLIDE 11 -->
  <!--    ####################################### SLIDE 11 -->
  <!--    ####################################### SLIDE 11 -->
  <div v-show="nro=='11'">
    <two-sides-div rightBackgroundColor="white">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <DashboardTodos></DashboardTodos>
        </div>
      </div>
      <div slot="right">
        <DashboardBenefits></DashboardBenefits>
      </div>
    </two-sides-div>
  </div>
  <!--    ####################################### SLIDE 12 -->
  <!--    ####################################### SLIDE 12 -->
  <!--    ####################################### SLIDE 12 -->
  <!--    ####################################### SLIDE 12 -->
  <!--    ####################################### SLIDE 12 -->
  <div v-show="nro=='12'">
    <two-sides-div rightBackgroundColor="white">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <DashboardTodos></DashboardTodos>
        </div>
      </div>
      <div slot="right">
        <DashboardBenefits></DashboardBenefits>
      </div>
    </two-sides-div>
    <SimpleModalBackdrop style="background-color:rgba(0,0,0,.5)"></SimpleModalBackdrop>
    <SimpleModal class="h-75"></SimpleModal>
  </div>
  <!--    ####################################### SLIDE 13 -->
  <!--    ####################################### SLIDE 13 -->
  <!--    ####################################### SLIDE 13 -->
  <!--    ####################################### SLIDE 13 -->
  <!--    ####################################### SLIDE 13 -->
  <div v-show="nro=='13'">
    <two-sides-div rightBackgroundColor="white">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <DashboardTodos></DashboardTodos>
        </div>
      </div>
      <div slot="right">
        <DashboardBenefits></DashboardBenefits>
      </div>
    </two-sides-div>
    <SimpleModalBackdrop style="background-color:rgba(0,0,0,.5)"></SimpleModalBackdrop>
    <SimpleModal class="h-75"></SimpleModal>
  </div>
  <!--    ####################################### SLIDE 14 -->
  <!--    ####################################### SLIDE 14 -->
  <!--    ####################################### SLIDE 14 -->
  <!--    ####################################### SLIDE 14 -->
  <!--    ####################################### SLIDE 14 -->
  <div v-show="nro=='14'">
    <div class="row justify-content-center mt-5">
    	
      <div class="col-12 self-align-center">
        <ul class="list-group">
          <li class="list-group-item position-relative">
            <h4 class="position-absolute w-100">Order XDFHAWX</h4>
            <p class="m-0 float-right">12/04/2018</p>
          </li>
          <div class="card">
            <div class="row m-4">
              <div class="col-12">
              	<div class="row">
              	<div class="col">
              		<p class="">Bourse sur critères sociaux (CROUS)</p>
              	</div>
              	<div class="col-2">
              		14 €
              	</div>
            	</div>
              </div>
              <div class="col-12">
                <div class="row">
              	<div class="col">
              		<p class="">Aide à la mobilité RATP</p>
              	</div>
              	<div class="col-2">
              		21 €
              	</div>
            	</div>
              </div>
              <hr>
              <div class="col-12">
                <div class="row">
              	<div class="col">
              		<strong>Total</strong>
              	</div>
              	<div class="col-2">
              		<strong>35 €</strong>
              	</div>
            	</div>
              </div>
              <div class="col-12 self-align-center mt-3">
    	<a href="#">télécharger facture</a>
    </div>
            </div>
          </div>
          <li class="list-group-item position-relative">
            <h4 class="position-absolute w-100">Order FGHZCYD</h4>
            <p class="m-0 float-right">06/03/2018</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { SimpleModal, SimpleModalBackdrop } from '@/styledComponents/modal';
import DashboardTodos from '@/components/tmd/DashboardTodos';
import TwoSidesDiv from '@/components/tmd/TwoSidesDiv';
import DashboardBenefits from '@/components/tmd/DashboardBenefits';

export default {
  name: 'DashboardMockups',
  props: [
    'nro'
  ],
  fetch() {},
  data() {
    return {
      asd: 50
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
    cl() {
      this.asd = 75
    }
  },
  components: {
    TwoSidesDiv,
    DashboardTodos,
    DashboardBenefits,
    SimpleModal,
    SimpleModalBackdrop
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.DashboardMockups {}
</style>
