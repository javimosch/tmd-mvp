<template>
<div class="OrderCheckoutInfo ">
  <simple-modal-backdrop v-show="true"
                         style="background-color:rgba(0,0,0,0.5)"></simple-modal-backdrop>
  <simple-modal v-show="true"
                class="h-75 pl-5 pr-5 pt-5">
    <h3 class="text-center">
    		Plus d’informations
		</h3>
    
  </simple-modal>
</div>

</template>

<script>
import CircleWithText from '@/components/tmd/CircleWithText';
import NoSSR from 'vue-no-ssr';
import OrderCheckoutLine from '@/components/tmd/OrderCheckoutLine';
import { SimpleModal, SimpleModalBackdrop } from '@/styledComponents/modal';
export default {
  name: 'OrderCheckoutInfo',
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
    CircleWithText
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.OrderCheckoutInfo {}

h3 {
  color: $color3;
}
</style>
