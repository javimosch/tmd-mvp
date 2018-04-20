<template>
<div class="Partners container">
  <div class="row no-gutters justify-content-center">
    <div class="col-lg-12 m-0 mt-5 mb-3 p-0">
      <h2 class="text-center">Ils nous soutiennent</h2>
    </div>
  </div>
  <div class="row PartnersLine no-gutters justify-content-center">
    <div class="col-12 col-md-6 col-lg-3 mt-3 VerticalCenteredChilds">
      <img class="mx-auto d-block PartnerLogo"
           src="http://www.pariscotejardin.fr/wp-content/2012/12/logo_mairie_de_paris.jpg" />
    </div>
    
    <div class="col-12 col-md-6 col-lg-3 mt-3 VerticalCenteredChilds">
      <img class="mx-auto d-block PartnerLogo"
           src="https://ae.ambafrance.org/local/cache-vignettes/L797xH370/ae4206ec0208456b-8d487.jpg?1516012939" />
    </div>
    <div class="col-12 col-md-6 col-lg-3 mt-3 VerticalCenteredChilds">
      <img class="mx-auto d-block PartnerLogo"
           src="http://www.best-masters.com/assets/img/logo_ecole/768.jpg" />
    </div>
    
    <div class="col-12 align-self-center mt-5" v-show="showCallToAction">
        <b-btn to="/mockup/2" class="mx-auto d-block mt-4" variant="success" size="lg">Commencer</b-btn>
      </div>
  </div>
  <div class="row no-gutters justify-content-center" v-if="false">
    <div class="col-lg-12 m-0 p-0 mt-5">
      <div class="partner">
        <img class="image mx-auto d-block"
             src="~/assets/partners/logo_ministere_justice.png" />
      </div>
    </div>
  </div>

</div>

</template>

<script>
export default {
  name: 'Partners',
  props: ['callToAction'],
  fetch() {},
  data() {
    return {}
  },
  async asyncData() {
    return {}
  },
  computed: {
    showCallToAction(){
      return this.callToAction!==undefined?this.callToAction:true;
    }
  },
  methods: {

  },
  components: {

  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Partners {
  
}
.PartnersLine{

}

h2 {
  color: $grey;
}

.image {
  width: 200px;
  margin: 0 auto;
  display: block;
}

.PartnerLogo {
  max-width: 250px;
  max-height: 150px;
}
a{
  max-width: 250px;
  background: mediumseagreen;
  font-size:30px;
  border-radius: 20px;
}
a:hover{
  background: darkseagreen;
}
.VerticalCenteredChilds{
   display: flex;
    align-items: center;
    flex-wrap: wrap;
}
</style>
