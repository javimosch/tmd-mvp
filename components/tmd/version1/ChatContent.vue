<template>
<div class="ChatContent scrollbar">
  <div class="row m-0 p-0">
    <div class="col m-2 mr-4 p-0">

    <div v-for="(item,index) in messages" :key="index">
    	<ChatMessageBot v-show="!item.isUser">
        <p slot="message" v-html="item.message"></p>
      </ChatMessageBot>
      <ChatMessage :isUser="true" v-show="item.isUser">
        <p slot="message" v-html="item.message">
          
        </p>
      </ChatMessage>
    </div>
      
    </div>
  </div>
</div>

</template>

<script>
import tmdChat from '@/plugins/tmdChat';
import ChatMessageBot from '@/components/tmd/ChatMessageBot';
import ChatMessage from '@/components/tmd/ChatMessage';
export default {
  name: 'ChatContent',
  props: [],
  fetch() {},
  async asyncData() {
    return {}
  },
  computed: {
    messages() {
      return this.$store.state.tmdChat.messages||[]
    }
  },
  methods: {

  },
  components: {
    ChatMessageBot,
    ChatMessage
  },
  created() {
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.ChatContent {
  overflow: auto;
  max-height: 200px;
  @media only screen and (min-width: 768px) {}
  @media only screen and (min-width: 992px) {
    min-height: 390px;
    max-height: 390px;
  }
}
</style>
