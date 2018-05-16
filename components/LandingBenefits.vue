<template>
<div class="LandingBenefits">
  <div class="row no-gutters justify-content-center">
    <div class="col-12 col-sm-12 ">
      <h2 class="text-center mb-5">Découvrez vos aides</h2>
    </div>
  </div>
  <div class="row no-gutters justify-content-center BlocksWrapper">

  	<div class="col-12">
  		<div class="row no-gutters justify-content-center">


    <div class="col-12 col-sm-6 IconColumn d-flex justify-content-center"
         v-for="(item,key) in items"
         :key="key">
      <div class="mx-auto d-block ItemBlock">
        <div class="row no-gutters">
          <div class="col-3">
            <div class="IconWrapper d-flex align-items-center">
              <img class="Icon"
                   v-if="!item.iconText"
                   :src="item.icon" />
                <span class="IconSpan" v-html="item.iconText" v-show="item.iconText"></span>
            </div>
          </div>
          <div class="col d-flex align-items-center">
          	<div>
            	<p class="m-0"
               v-html="item.text"></p>
               <p class="Subtitle" v-show="item.subtitle" v-html="item.subtitle||'&nbsp;'"></p>
           </div>
          </div>
        </div>
        
      </div>
    </div>

  </div>
  	</div>

  </div>

  

</div>

</template>

<script>
export default {
  name: 'LandingBenefits',
  props: [],
  fetch() {},
  data() {
    return {
      items: []
    }
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
  mounted() {
    if (process.server) {
      return
    }
    this.items = (Array.apply(null, {
      length: 18
    }).map(Function.call, () => {
      return {
        text: 'Fonde Lorem insta crud THAX',
        icon: '/benefitsIcons/1.png'
      }
    }))

    this.items = [
  {
    text: "Bourse&nbsp;étudiante",
    subtitle:"CROUS",
    icon: "/benefitsIcons/1-crous.png"
  },
  {
    text: "Aide&nbsp;au&nbsp;logement&nbsp;-&nbsp;APL&nbsp;/&nbsp;ALS",
    subtitle:"CAF",
    icon: "/benefitsIcons/2-caf-apl.jpg"
  },
  {
    text: "Aide&nbsp;à&nbsp;l\"installation&nbsp;-&nbsp;AILE",
    subtitle:"Ville&nbsp;de&nbsp;Paris",
    icon: "/benefitsIcons/3-mairie-de-paris.png"
  },
  {
    text: "Bourse&nbsp;au&nbsp;mérite&nbsp;",
    subtitle:"Région&nbsp;Ile-de-France",
    icon: "/benefitsIcons/4-ille-de-france.png"
  },
  {
    text: "Aide&nbsp;complémentaire&nbsp;santé",
    subtitle:"Assurance&nbsp;maladie",
    icon: "/benefitsIcons/5-acs.png"
  },
  {
    text: "Revenu&nbsp;de&nbsp;Solidarité&nbsp;Active&nbsp;-&nbsp;RSA",
    subtitle:"CAF",
    icon: "/benefitsIcons/6-rsa.png"
  },
  {
    text: "Chèque&nbsp;Energie",
    subtitle:"Etat",
    icon: "/benefitsIcons/7-cheque-energie.jpg"
  },
  {
    text: "Allocation&nbsp;personnes&nbsp;âgées&nbsp;-&nbsp;ASPA",
    subtitle:"CNAV",
    icon: "/benefitsIcons/8-aspa.jpg"
  },
  {
    text: "Allocation&nbsp;de&nbsp;solidarité&nbsp;spécifique",
    subtitle:"Pôle&nbsp;Emploi",
    icon: "/benefitsIcons/9-pole-emploi-ass.jpg"
  },
  {
    text: "Pass&nbsp;culture",
    subtitle:"Etat",
    icon: "/benefitsIcons/10-pass-culture.png"
  },
  {
    text: "Allocation&nbsp;aux&nbsp;adultes&nbsp;handicapés",
    subtitle:"CAF&nbsp;-&nbsp;AAH",
    icon: "/benefitsIcons/11-aah.jpg"
  },
  {
    text: "Plus&nbsp;de&nbsp;6&nbsp;000&nbsp;aides...",
    subtitle:"Etat,&nbsp;régions,&nbsp;départements,&nbsp;villes",
    iconText: "6000"
  },
]

  }
}

</script>

<style lang="scss" scoped="">
.BlocksWrapper{
	@media only screen and (min-width: 992px) {
		max-width: 800px;
		display: block;
		margin: 0 auto;
	}
}
.LandingBenefits {
  background-color: $color3;
  margin-bottom: 0px;
  padding: 70px 0px 90px 0px;
}
.Subtitle{
	color:$grey;
	margin-bottom:0px;
	font-size:12px;
}
h2{
	color:white;
	font-size:40px;
}
.Icon {
  max-width: 30px;
  margin: 0 auto;
  display: block;
}

.IconWrapper {
  height: 40px;
  width: 40px;
  margin: 0 auto;
  display: block;
  background: white;
  border-radius: 10px;
}

.ItemBlock {
  
  padding: 0px 0px;
  
  min-width: 300px;
  max-width: 300px;
  @media only screen and (min-width: 992px) {
    min-width: 350px;
    max-width: 350px;
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
