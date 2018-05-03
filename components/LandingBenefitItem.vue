<template>
<div class="LandingBenefitItem IconColumn d-flex justify-content-center">
  <div class="mx-auto d-block ItemBlock">
    <div class="row no-gutters">
      <div class="col-3">
        <div class="IconWrapper d-flex align-items-center">
          <img class="Icon"
               v-if="!item.iconText"
               :src="item.icon" />
          <span class="IconSpan"
                v-html="item.iconText"
                v-show="item.iconText"></span>
        </div>
      </div>
      <div class="col d-flex align-items-center">
        <div>
          <p class="m-0 Title"
             v-html="item.text"></p>
          <p class="Subtitle"
             v-show="item.subtitle"
             v-html="item.subtitle||'&nbsp;'"></p>
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'LandingBenefitItem',
  props: ['item'],
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
.LandingBenefitItem {}
	.Icon {
  max-width: 50px;
  margin: 0 auto;
  display: block;
}
.Title{
	color:white;
  font-size:16px;
}
.Subtitle{
	color:$grey;
	margin-bottom:0px;
	font-size:14px;
}
.IconWrapper {
  height: 60px;
  width: 60px;
  margin: 0 auto;
  display: block;
  background: white;
  border-radius: 10px;
}

.ItemBlock {
  
  padding: 0px 0px;
  
  min-width: 380px;
  max-width: 380px;
  @media only screen and (min-width: 992px) {
    min-width: 380px;
    max-width: 380px;
  }
  border: 0px solid snow;
}
.IconSpan{
	    font-size: 14px;
    display: block;
    text-align: center;
    width: 100%;
}
.IconColumn {
  margin-top: 15px;
}

p {
  color: white;
  font-size: 12px;
  @media only screen and (min-width: 992px) {
    font-size: 14px;
  }
}
</style>
