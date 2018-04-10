<template>
<div class="DashboardBenefitItem mt-2">
  <div class="row no-gutters align-items-center">
    <div class="col-12 self-align-center">
      <LineProgress :value="value"
                    height="25"
                    color="red"
                    bg="#EEEEEE"
                    ></LineProgress>
      
    </div>
    <div class="col-12 mt-0">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md-8 mt-3">
          <p v-html="text" class="mb-0">Benefit description</p>
        </div>
        <div class="col-12 col-md-4 mt-3">
          <p class="ViewDetails float-md-right">View details</p>
        </div>
        <div class="col-12  mt-0 self-align-start">
          <p class="ViewDetails float-md-right" >ETA: 15 days</p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import LineProgress from '@/components/LineProgress';
export default {
  name: 'DashboardBenefitItem',
  props: [
    'text','value'
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
LineProgress
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.DashboardBenefitItem {}

.TodoIcon {
  font-size: 30px;
  color: $color3;
}

.TodoText {
  color: $color5;
}

.TodoText.completed {
  color: grey;
}
.ViewDetails{
  font-size:12px;
}
</style>
