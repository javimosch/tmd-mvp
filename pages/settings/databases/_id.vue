<template>
  <div class="container mt-5">
    <b-breadcrumb :items="breadcrumbs"/>

  

    <b-table striped hover :items="transformedItems" :fields="fields" responsive stacked="lg" small>
      
    <template slot="mysql" slot-scope="data">
      <span v-html='JSON.stringify(transformMysqlConfig(data.value))'></span>  
    </template>

    <template slot="show_details" slot-scope="row">
      <b-button size="sm" @click.stop="row.toggleDetails" class="mr-2">
       {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
      </b-button>
    </template>
    <template slot="row-details" slot-scope="row">
      <b-card>
          <record-details 
          :showId="false" :data="row.item" :cancelBtn="false"
          @delete="row.toggleDetails"
          @onSave="onRowSave()"
          ></record-details>
      </b-card>
    </template>

    </b-table>

    <record-details 
          v-show="isFormVisible"
          :showId="true" :data="selectedItem" 
          :cancelBtn="true"
          @onSave="toggleCrud()"
          @onCancel="toggleCrud()"
          ></record-details>

    <b-button 
    v-show="!isFormVisible"
    @click="toggleCrud()" class="mt-5" variant="primary" size="lg">New</b-button>

    

  </div>
</template>

<script>

import RecordDetails from '@/components/DatabaseRecordDetails';
export default {
  layout: 'app',
  computed:{
    selectedItem(){
      return {}; //this.$store.state.databases.item
    },
    items(){
      return this.$store.state.databases.items
    }
  },
  mounted(){
    this.transformItems();
  },
  watch:{
    items(){
      this.transformItems();
    }
  },
  data () {
    let self = this;
    return {
      isFormVisible:false,
      transformedItems:[],
      fields: [{key:'_id',label:'Id'},'name', 'type', { key: 'mysql', label: 'Config' }, 'show_details'],
      mode: "list", //new edit
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
    onRowSave(){
      this.transformItems();
    },
    toggleCrud(){
      this.isFormVisible = !this.isFormVisible;
    },
    transformItems(){
      let arr = [];
      this.items.forEach(i=>arr.push(Object.assign({},i)));
      this.transformedItems = arr;
    },
    transformMysqlConfig(v){
      return {
        host:v.host,
        database:v.database,
        user:v.user
      }
    },
    stacked(){
      return window && window.innerWidth < 768;
    }
  },
  components: {
    RecordDetails
  }
}
</script>

<style>

</style>
