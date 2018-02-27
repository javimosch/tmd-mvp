<template>
  <div class="container">
    <b-breadcrumb :items="breadcrumbs"/>

    <b-list-group >
      <b-list-group-item v-for="item in items" :key="item._id" v-html="item.type"></b-list-group-item>
    </b-list-group>

    <crud-form :data="selectedItem" :options="formOptions"></crud-form>

  </div>
</template>

<script>
import CrudForm from '@/components/Form';
export default {
  layout: 'app',
  computed:{
    selectedItem(){
      return this.$store.state.databases.item
    }
  },
  data () {
    let self = this;
    return {
      mode: "list", //new edit
      formOptions:{
        fetch: ()=> this.$store.dispatch('databases/fetch', this.$store.state.route.params.id),
        draft: (p)=> this.$store.dispatch('databases/draft',p),
        save:{
          label:"Guardar",
          handler:async()=> {
            let doc = await this.$store.dispatch('databases/save');
            self.$router.push({
              name:"settings-databases-id",
              params:{
                id: doc._id
              }
            })
          }
        },
        fields:{
          type:{
            type:'select',
            in:['MYSQL'],
            default:'Select one',
            required:true
          },
          mysql:{
            visible:(model)=>model.type==='MYSQL',
            type:'subform',
            options:{
              fields:{
                host:{
                  type:'string'
                }
              }
            }
          }
          
        }
      },
      items:[],
      breadcrumbs:[{
        text:'Dashboard',
        to:'/dashboard'
      },
      {
        text:'Settings',
        to:'/settings'
      },
      {
        text:'Databases',
        active:true
      }
      ]
    }
  },
  fetch ({store, error}) {
   store.dispatch('databases/update').catch(error);
  },
  methods: {
   
  },
  components: {
    CrudForm
  }
}
</script>

<style>

</style>
