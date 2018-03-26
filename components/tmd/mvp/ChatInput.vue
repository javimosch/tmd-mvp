<template>

  <div class="ChatInput">
    <div class="left-side">
      <div v-show="inputNode">
        <input class="form-control"
               @keyup.enter="onSubmit"
               type="text"
               :placeholder="inputNode && inputNode.placeholder||''" />
        
      </div>
      <div v-show="!inputNode">
        <slot name="options"></slot>
      </div>
    </div>
    <button class="submit">
        <img class="arrow"
             :src="right_arrow">
      </button>
  </div>


</template>

<script>
import right_arrow from '@/assets/right_arrow.svg';
export default {
  name: 'ChatInput',
  props: [
    'inputNode'
  ],
  data() {
    return {
      right_arrow
    }
  },
  methods: {
    onSubmit(e) {
      this.$emit('onSubmit', e.target.value)
    }
  }
};

</script>

<style lang="scss" scoped="">
.ChatInput {
  position: relative;
}

.left-side{
    display: inline-block;
    border: 1px solid $color1;
    width: 100%;
    padding:5px 50px 5px 5px;
}
.submit {
  position: absolute;
  right:0px;
  top:0px;
  background-color: $color3;
  color: #212431;
  width: 50px;
  height: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  @media (min-width: 480px) {
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    bottom: 30px;
  }
}
.arrow{
  vertical-align: middle;
  width:16px;
}
input{
  border:0px;
}
input:active,input:focus,input:hover, .form-control:focus{
  outline:0px!important;
  box-shadow:0 0 0 0.2rem rgba(0, 123, 255, 0)!important;
  border:0px!important;
}
</style>
