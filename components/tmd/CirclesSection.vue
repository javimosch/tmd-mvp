<template>
<div class="CirclesSection container">
  <div class="row m-0 p-0 h-100 justify-content-center asd"
       data-rellax-speed="0">
    <div class="col col-sm-4 col-lg-2 align-self-start mt-4">
      <CircleWithText></CircleWithText>
    </div>
    <div class="col col-sm-4 col-lg-2 align-self-center mt-4">
      <CircleWithText class="asd"
                      data-rellax-speed="0.3"
                      bg="rgb(233, 153, 154)"
                      color="white"></CircleWithText>
    </div>
    <div class="col col-sm-4 col-lg-2 align-self-end mt-4">
      <CircleWithText class="asd"
                      data-rellax-speed="-0.3"
                      bg="rgb(253, 170, 76)"
                      color="white"></CircleWithText>
    </div>
    <div class="col col-sm-4 col-lg-2 align-self-center mt-4">
      <CircleWithText class="asd"
                      data-rellax-speed="0.3"
                      bg="rgb(233, 153, 154)"
                      color="white"></CircleWithText>
    </div>
    <div class="col col-sm-4 col-lg-2 align-self-start mt-4">
      <CircleWithText class="asd"
                      data-rellax-speed="-0.3"></CircleWithText>
    </div>
    <div class="col col-sm-4 col-lg-2 align-self-center mt-4">
      <CircleWithText class="asd"
                      data-rellax-speed="0.3"
                      bg="rgb(233, 153, 154)"
                      color="white"></CircleWithText>
    </div>
  </div>
</div>

</template>

<script>
import CircleWithText from '@/components/tmd/CircleWithText';
export default {
  name: 'CirclesSection',
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
    CircleWithText
  },
  created() {},
  mounted() {
    if (window.innerWidth > 1024) {
      try {
        new Rellax('.asd')
      } catch (err) {}
    }
  }
}

</script>

<style lang="scss" scoped="">
.CirclesSection {
  padding:100px 0px;
  margin-top: 0px;
  @media only screen and (min-width: 992px) {
    margin-top:0px;
  }
}
</style>
