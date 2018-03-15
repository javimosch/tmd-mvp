<template>
  <div>
    <div class="row mt-3 p-5 justify-content-center">
      <div class="col-md-auto m-0 p-0">
        <h2 class="text-center" v-html="title"></h2>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'tmd-landing',
  middleware:['appParams'],
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
        title:""
      };
  },
  asyncData({store, params}){
      let self = this;
      return new Promise((resolve,reject)=>{
          setTimeout(function(){
            resolve({
              title:params.path
            });
          },3000);
      });
  },
  components: {
    
  }
}

</script>
<style lang="scss" scoped>

</style>
