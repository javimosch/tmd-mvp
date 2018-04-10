<template>
<div class="DashboardBenefits p-5">
  <div class="row row align-items-start m-0 p-0">
    <div class="col align-self-center m-0 p-0">
    	<ul class="list-group">
    		
    		<DashboardBenefitItem 
        :value="60" text="Bourse sur critères sociaux (CROUS)">
        </DashboardBenefitItem>

        <DashboardBenefitItem 
        :value="44" text="Aide à la mobilité RATP">
        </DashboardBenefitItem>
    		
        <DashboardBenefitItem 
        :value="35" text="Aide à l’installation AILE">
        </DashboardBenefitItem>
    		
    	</ul>
    </div>
  </div>
</div>

</template>

<script>

import DashboardBenefitItem from '@/components/tmd/DashboardBenefitItem';
export default {
  name: 'DashboardTodos',
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
	DashboardBenefitItem
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.DashboardBenefits {}
</style>
