<template>
<div class="StartHeader">
  <div class="row m-0 p-0 justify-content-center">
    <div class="col-12 align-self-center mt-0 mb-0">
      <h1 class="text-center mx-auto d-block ">Obtenez toutes vos aides en quelques clics
</h1>
    </div>
    <div class="col-12">
      <slot></slot>
    </div>
    <div class="col-12 align-self-center mt-0"
         v-if="false">
      <b-btn to="/mockup/2"
             class="mx-auto d-block mt-4"
             variant="success"
             size="lg">Commencer</b-btn>
    </div>
    <!--
    <div class="col-12 align-self-center mt-1 mb-5"
         v-if="true">
      <img @click="scrollDown"
           :src="ArrowDown"
           class="ArrowDown pulse animated infinite mt-5 mx-auto d-block" />
    </div>
    -->
  </div>
</div>

</template>

<script>
import $ from 'jquery';
import ArrowDown from '@/assets/arrows/arrow-down.svg';
import CircleWithText from '@/components/tmd/CircleWithText';

export default {
  name: 'StartHeader',
  props: [],
  fetch() {},
  data() {
    return {
      ArrowDown
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
    scrollDown() {
      window.scrollBy({
        top: window.innerHeight, // could be negative value
        left: 0,
        behavior: 'smooth'
      })
    }
  },
  components: {
    CircleWithText
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.StartHeader {}

.ArrowDown {
  max-width: 30px;
}

.ArrowDown:hover {
  cursor: pointer;
}

h1 {
  max-width: 992px;
  line-height: 20px;
  font-size: 35px;
  color: $color2;
  padding: 15px;
  margin: 10px auto 0px auto;
  font-weight: 300;
  letter-spacing: 3px;
}

a {
  max-width: 250px;
  background: mediumseagreen;
  font-size: 30px;
  border-radius: 20px;
}

a:hover {
  background: darkseagreen;
}
</style>
