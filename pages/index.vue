<template>
  <div>




    <div class="row mt-3 p-5 justify-content-center">
      <div class="col-md-auto m-0 p-0">
        <h2 class="text-center">Vos droits expliqués simplement</h2>
      </div>
    </div>
    <demo-chat></demo-chat>
    
    <div class="row mt-3 pt-5 justify-content-center">
      <div class="col-md-auto m-0 p-0">
        <h2 class="text-center" v-html="title"></h2>
      </div>
    </div>
    
    <div class="row mt-0 p-5 mb-5 justify-content-center">
      <div class="col-md-auto m-0 p-0">
        <div class="card">
          <div class="circle">
            <router-link to="/app" class="circle_text">Mon Travail</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-auto m-0 p-0">
        <div class="card">
          <div class="circle">
            <router-link to="/" class="circle_text">Ma Santè</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-auto m-0 p-0">
        <div class="card">
          <div class="circle">
            <router-link to="/" class="circle_text">Ma Familie</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-auto m-0 p-0">
        <div class="card">
          <div class="circle">
            <router-link to="/" class="circle_text">Mon<br>Logement</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-auto m-0 p-0">
        <div class="card">
          <div class="circle">
            <router-link to="/" class="circle_text">Mon Argent</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-auto m-0 p-0">
        <div class="card">
          <div class="circle">
            <router-link to="/" class="circle_text">Ma Voiture</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-auto m-0 p-0">
        <div class="card">
          <div class="circle">
            <router-link to="/" class="circle_text">Mes<br>Voyages</router-link>
          </div>
        </div>
      </div>
      <div class="col-md-auto m-0 p-0">
        <div class="card">
          <div class="circle">
            <router-link to="/" class="circle_text">Autres</router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-5 p-5 justify-content-center">
      <div class="col-lg-12 m-0 p-0">
        <h2 class="text-center">Nos partenaires</h2>
      </div>
      <div class="col-lg-auto m-0 p-0 mt-4">
        <div class="card">
          <img class="parner_logo" src="~/assets/partners/logo_pantheon_sobornne.jpg"/>
        </div>
      </div>
      <div class="col-lg-auto m-0 p-0 mt-4">
        <div class="card">
          <img class="parner_logo" src="~/assets/partners/logo_ministere_justice.png"/>
        </div>
      </div>
    </div>


    

  </div>
</template>
<script>
import DemoChat from '@/components/tmd/landing/DemoChat'
export default {
  layout: 'tmd-landing',
  head () {
    return {
      title: this.title,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  data(){
      return {
        title:"FOO"
      };
  },
  asyncData({store}){
      let self = this;
      return new Promise((resolve,reject)=>{
          setTimeout(function(){
            resolve({
              title:'Services'
            });
          },3000);
      });
  },
  components: {
    DemoChat
  }
}

</script>
<style lang="scss" scoped>
.jumbotron {
  background-image: linear-gradient(80deg, #00aeff, #3369e7);
  color: white;
}
h2{
  color: $color3;
}

.circle_text:hover,.circle_text:active,.circle_text:focus{
  text-decoration:none;
}
.circle_text {
  display: table-cell;
  vertical-align: middle;
  line-height: normal;
  color: $color6;
}
.card{
    width: 140px;
    padding-left: 20px;
    border: 0px !important;
    padding-bottom: 20px;
    margin: 0 auto;
}
.circle {
    display:table;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    font-size: 14px;
    
    line-height: 14px;
    text-align: center;
    background: $color2;
    margin: 0 auto;
}
.parner_logo{
  width: 200px;
}
</style>
