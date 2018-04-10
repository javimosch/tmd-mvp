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
    	asd:50
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
  	cl(){
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
  mounted() {
  	
  }
}

</script>

<style lang="scss" scoped="">
.DashboardMockups {}

</style>
