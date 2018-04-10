<template>
<div class="DashboardMockups">
  <!--    ####################################### SLIDE 11 -->
  <!--    ####################################### SLIDE 11 -->
  <!--    ####################################### SLIDE 11 -->
  <!--    ####################################### SLIDE 11 -->
  <!--    ####################################### SLIDE 11 -->
  <div v-show="nro=='11'">
    <two-sides-div rightBackgroundColor="#EEEEEE">
      <div slot="left"
           class="row row align-items-start m-0 p-0">
        <div class="col align-self-center m-0 p-0">
          <DashboardTodos></DashboardTodos>
        </div>
      </div>
      <div slot="right">
      </div>
    </two-sides-div>
  </div>
</div>

</template>

<script>
import DashboardTodos from '@/components/tmd/DashboardTodos';
import TwoSidesDiv from '@/components/tmd/TwoSidesDiv';
export default {
  name: 'DashboardMockups',
  props: [
    'nro'
  ],
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
TwoSidesDiv,
DashboardTodos
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.DashboardMockups {}
</style>
