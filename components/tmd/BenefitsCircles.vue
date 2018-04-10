<template>
<div class="BenefitsCircles">
  <div class="row mb-5 mt-0">
    <slot>
    <div class="col-lg-6 mt-5">
      
      <CircleBenefit  :value="68"
                     text="Bourse sur critères sociaux - CROUS"
                     price="0 € - 6 500 €">
        Dossier complété:
      </CircleBenefit>
    </div>
    <div class="col-lg-6 mt-5">
      <CircleBenefit :value="72" borderColor="#FC5D60"
                     text="Aide à l’installation AILE"
                     price="900 €">Dossier complété:</CircleBenefit>
    </div>
    <div class="col-lg-6 mt-5">
      <CircleBenefit :value="62" borderColor="rgb(229, 228, 234)"
                     text="Aide au logement CAF"
                     price="1 200 € - 2 500 €">Dossier complété:</CircleBenefit>
    </div>
    <div class="col-lg-6 mt-5" >
      <CircleBenefit :value="75" borderColor="rgb(229, 100, 200)"
                     text="Aide à la mobilité RATP"
                     price="750 €">Dossier complété:</CircleBenefit>
    </div>
  </slot>
  </div>
</div>

</template>

<script>
import CircleBenefit from '@/components/tmd/CircleBenefit';
export default {
  name: 'BenefitsCircles',
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
    CircleBenefit
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.BenefitsCircles {}
</style>
