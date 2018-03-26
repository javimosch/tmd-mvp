<template>
<div :class="'ChatMessage '+(isUser?'isUser':'')">
  <img :src="robot" class="robot" v-show="!isUser"/>
  <div class="ChatMessageBox">
    
    <div class="ChatMessageFrom">
      <slot name="from"></slot>
    </div>
    <div class="ChatMessageText">
      <slot>Cras justo odio</slot>
    </div>
    <div class="ChatMessageAt">
      <slot name="at"></slot>
    </div>
  </div>
</div>

</template>

<script>
import robot from '@/assets/robot.svg';
export default {
  name: 'ChatMessage',
  props:['isUser'],
  data() {
    return {
      robot
    }
  },
  components: {

  }
};

</script>

<style lang="scss" scoped="">
.ChatMessageFrom span {
  display: block;
  width: 100%;
  background-color: $color3;
  color: $color6;
  font-size: 14px;
  padding-left: 5px;
  border-radius: 10px 4px 0 0;
}

.ChatMessageFrom span.isUser {
  background-color: $color1;
  color: $color5;
  text-align: right;
  padding-right: 5px;
}

.robot{
  width: 22px;
  display: inline-block;
}

.ChatMessage {}

.ChatMessageBox {
  padding: 0px;
  border: 1px solid #ebedf6;
  border-radius: 10px 4px 10px 5px;
  margin-bottom: 10px;
  display: inline-block;
  min-width: 100px;
  max-width: 90%;
}
.ChatMessage.isUser{
  text-align: right;
}

.ChatMessageText {
  padding: 0px;
}

.ChatMessageText p {
  padding: 5px!important;
  margin: 0px!important;
  font-size: 14px;
}

.ChatMessageText p.isUser {
  text-align: right;
}

.ChatMessageAt {
  font-size: 8px;
  text-align: right;
  padding-right: 5px;
}
</style>
