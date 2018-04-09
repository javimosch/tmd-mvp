<template>
<div class="Partners p-5">
  <div class="row no-gutters justify-content-center">
    <div class="col-lg-12 m-0 mt-5 mb-3 p-0">
      <h2 class="text-center">Nos partenaires</h2>
    </div>
  </div>
  <div class="row PartnersLine no-gutters justify-content-center">
    <div class="col-12 col-md-6 col-lg-3 mt-3">
      <img class="mx-auto d-block PartnerLogo"
           src="~/assets/partners/logo_pantheon_sobornne.jpg" />
    </div>
    <div class="col-12 col-md-6 col-lg-3 mt-3">
      <img class="mx-auto d-block"
           src="http://via.placeholder.com/250x150" />
    </div>
    <div class="col-12 col-md-6 col-lg-3 mt-3">
      <img class="mx-auto d-block"
           src="http://via.placeholder.com/250x150" />
    </div>
    <div class="col-12 col-md-6 col-lg-3 mt-3">
      <img class="mx-auto d-block"
           src="http://via.placeholder.com/250x150" />
    </div>
  </div>
  <div class="row no-gutters justify-content-center">
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
  color: $color5;
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
</style>
