<template>
<div class="StripeCardElement">
  <no-ssr>
  	<div>
    <card class='stripe-card'
      :class='{ complete,"form-control":true,"d-block":true,"mx-auto":true }'
      stripe='pk_test_MDkxtBLcBpHwMCgkqX2dJHjO'
      :options='stripeOptions'
      @change='complete = $event.complete'
    />
    
    <div class="row justify-content-center align-items-center">
    	<div class="col self-align-center">
    		<b-btn class="PayButton mx-auto d-block ml-2 mr-2 mt-4"
               variant="primary"
               :disabled='!complete'
               @click='pay'
               size="lg">VALIDER</b-btn>
    	</div>
    </div>
    

  	</div>
  </no-ssr>
</div>

</template>

<script>
import { Card, createToken } from 'vue-stripe-elements-plus'
import NoSSR from 'vue-no-ssr';
export default {
  name: 'StripeCardElement',
  props: [],
  fetch() {},
  data() {
    return {
    	 complete: false,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
      }
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
pay () {
      // createToken returns a Promise which resolves in a result object with
      // either a token or an error key.
      // See https://stripe.com/docs/api#tokens for the token object.
      // See https://stripe.com/docs/api#errors for the error object.
      // More general https://stripe.com/docs/stripe.js#stripe-create-token.
      createToken().then(data => console.log(data.token))
    }
  },
  components: {
    'no-ssr': NoSSR,
    Card
  },
  created() {},
  mounted() {
    
    
  }
}

</script>

<style lang="scss" scoped="">
.StripeCardElement {}

.stripe-card {
  max-width: 500px;
  border: 1px solid grey;
}
.stripe-card.complete {
  border-color: green;
}
.PayButton{
	min-width: 200px;
}

.StripeElement {
  background-color: white;
  height: 40px;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
