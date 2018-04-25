<template>
<div class="LandingBenefits">
  <div class="row no-gutters justify-content-center">
    <div class="col-12 col-sm-12 ">
      <h2 class="text-center mb-5">Plus de 6 000 aides</h2>
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
                   :src="item.icon" />
            </div>
          </div>
          <div class="col d-flex align-items-center">
          	<div>
            	<p class="m-0"
               v-html="item.text"></p>
               <p class="Subtitle" v-html="item.subtitle||'&nbsp;'"></p>
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
        text: 'Bourse&nbsp;étudiante&nbsp;sur&nbsp;critères&nbsp;sociaux',
        subtitle:'CROUS',
        icon: '/benefitsIcons/11.png'
      },
      {
        text: 'Aide&nbsp;au&nbsp;logement&nbsp;APL&nbsp;/&nbsp;ALS',
        subtitle:'CAF',
        icon: '/benefitsIcons/2.png'
      },
      {
        text: 'Aide&nbsp;à&nbsp;l\'installation&nbsp;-&nbsp;AILE',
        subtitle:'Ville de Paris',
        icon: '/benefitsIcons/9.png'
      },
      {
        text: 'Bourse&nbsp;au&nbsp;mérite&nbsp;',
        subtitle:'Région&nbsp;Ile-de-France',
        icon: '/benefitsIcons/9.png'
      },
      {
        text: 'Aide&nbsp;complémentaire&nbsp;santé',
        subtitle:'Assurance maladie',
        icon: '/benefitsIcons/7.png'
      },
      {
        text: 'Revenu&nbsp;de&nbsp;Solidarité&nbsp;Active&nbsp;-&nbsp;RSA',
        subtitle:'CAF',
        icon: '/benefitsIcons/ass.png'
      },
      {
        text: 'Revenu&nbsp;de&nbsp;Solidarité&nbsp;Active&nbsp;-&nbsp;RSA',
        subtitle:'CAF',
        icon: '/benefitsIcons/6.png'
      },
      {
        text: 'Chèque&nbsp;Energie',
        subtitle:'',
        icon: '/benefitsIcons/checkeenergie.png'
      },
      {
        text: 'Allocation&nbsp;de&nbsp;personnes&nbsp;âgées',
        subtitle:'ASPA',
        icon: '/benefitsIcons/aspa.png'
      },
      {
        text: 'Allocation&nbsp;de&nbsp;solidarité&nbsp;spécifique',
        icon: '/benefitsIcons/2.png'
      },
      {
        text: 'Allocations&nbsp;chômage',
        icon: '/benefitsIcons/1.png'
      },
      {
        text: 'Pass&nbsp;culture',
        icon: '/benefitsIcons/1.png'
      }
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
  min-height: 600px;
  margin-bottom: 50px;
  padding: 70px 0px 100px 0px;
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
  max-width: 20px;
  margin: 0 auto;
  display: block;
}

.IconWrapper {
  height: 30px;
  width: 30px;
  margin: 0 auto;
  display: block;
  background: white;
  border-radius: 15px;
}

.ItemBlock {
  
  padding: 0px 0px;
  
  min-width: 300px;
  max-width: 300px;
  @media only screen and (min-width: 992px) {
    min-width: 300px;
    max-width: 300px;
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
}
</style>
