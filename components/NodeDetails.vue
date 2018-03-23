<template>
<div class="NodeDetails m-0 p-0 m-2">
  <label>ID</label>
  <input 
         class="row m-0 p-0"
         :value="id||'(new)'"
         disabled
         placeholder="id" />
  <label class="mt-2">Name</label>
  <input 
         class="row m-0 p-0"
         v-model="name"
         placeholder="name" />
  <label class="mt-2">Title</label>
  <input class="row m-0 p-0" 
         v-model="title"
         placeholder="title" />
  <div class="row m-0 p-0 mt-2">
    <div class="">
      <b-btn @click="onSave">Save</b-btn>
    </div>
    <div class="ml-2">
      <b-btn @click="onClear">Clear</b-btn>
    </div>
  </div>
</div>

</template>

<script>
var shortid = require('shortid')
export default {
  props: [
    'props'
  ],
  data(){
    return {
      id: this.props && this.props.id,
      name: this.props && this.props.name||'',
      title: this.title && this.props.title||''
    }
  },
  mounted() {
    let self = this;
    this.$watch('props',v=>Object.assign(self.$data,v),{deep:true});
  },
  methods: {    
    onInput({target}) {
      this.$data[target.dataset.type] = target.value
    },
    onSave() {
      const id = this.id || shortid.generate().toString().toUpperCase()
      this.$emit('onSave', _.cloneDeep(this.$data));
      this.onClear();
    },
    onClear(){
      Object.assign(this.$data,{
        id:'',
        name:'',
        title:'',
      });
      this.$emit('onClear');
    }
  }
}

</script>

<style lang="scss" scoped="">
.NodeDetails{
  position:fixed;
  right:0px;
  z-index: 9999;
}
label{
  margin-bottom:5px;
}
</style>
