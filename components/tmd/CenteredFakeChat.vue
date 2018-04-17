<template>
<div class="CenteredFakeChat container">
  <div class="row row align-items-start m-0 p-0">
    <div class="col align-self-center m-0 p-0">
      <Chat ref="chat" :showMessagesSample="false">
        <div v-for="(item,key) in messages"
             :key="key">
          <ChatMessageBot v-show="!item.isUser"
                          :loading="item.loading"
                          :class="item.class">
            <p slot="message"
               v-html="item.text"></p>
          </ChatMessageBot>
          <ChatMessageUser v-show="item.isUser"
                           :loading="item.loading"
                           :class="item.class">
            <p slot="message"
               v-html="item.text"></p>
          </ChatMessageUser>
        </div>
      </Chat>
    </div>
  </div>
</div>

</template>

<script>
import $ from 'jquery';
import ChatMessageBot from '@/components/tmd/ChatMessageBot';
import ChatMessageUser from '@/components/tmd/ChatMessageUser';
import Chat from '@/components/tmd/Chat';
import Typed from 'typed.js';
var state = {
  messages: null
}
export default {
  name: 'CenteredFakeChat',
  props: [],
  fetch() {},
  data() {
    return {
      messages: []
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
    Chat,
    ChatMessageBot,
    ChatMessageUser
  },
  created() {},
  async mounted() {
    if (process.server) {
      return
    }

    this.$store.commit('tmdChat/setInputDisabled', true)
    const self  = this;
    state.messages = this.messages

    cycle(async() => {
      
        await clearMessages(self);
        await addMessage(`Bonjour, je m’appelle Chloé ! 
Je vais t’aider à trouver toutes les aides financières auxquelles tu as droit`, false, 3)
        await waitSeconds(1)
        await addMessage('D’ailleurs, comment t’appelles-tu ?', false, 2)
        await waitSeconds(1)
        await addMessage('July!', true, 2)
        await addMessage('Enchantée Julie ! Très joli prénom d’ailleurs ;)', false, 2, 1)
      
    }, 5000);

  }
}

async function cycle(handler,milli){
  try {
  await handler();
  setTimeout(()=>cycle(handler,milli),milli);
  } catch (err) {
        console.error(err)
      }
}

async function clearMessages(cmp){
  state.messages = cmp.messages = [];
}

async function addMessage(message, isUser = false, loadingSeconds = 1, startInSeconds = 0) {
  await waitSeconds(startInSeconds)

  if (isUser) {
    await typedMessage([
      message
    ])
  }

  state.messages.push({
    loading: isUser ? false : true,
    class: '',
    isUser: isUser,
    text: message
  })
  await scrollToBottom()
  if (!isUser) {
    await waitSeconds(loadingSeconds)
    state.messages[state.messages.length - 1].loading = false
  }
  await scrollToBottom()
}

function typedMessage(strings, speed = 5, waitToDelete = 1) {
  var selector = '.ChatInputControl'
  return new Promise((resolve, reject) => {
    var options = {
      strings: strings,
      typeSpeed: speed,
      onComplete: async() => {
        await waitSeconds(waitToDelete)
        $(selector).val('')
        typed.destroy();
        resolve()
      }
    }
    var typed = new Typed(selector, options)
  })
}

function waitSeconds(s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), s * 1000)
  })
}

function scrollToBottom() {
  return new Promise((resolve, reject) => {
    var el = $('.ChatContent')
    el.animate({
      scrollTop: el[0].scrollHeight
    }, 100, function() {
      resolve()
    })
  })
}

</script>

<style lang="scss" scoped="">
.CenteredFakeChat {
  opacity: 0.7;
  max-width: 500px;
  margin: 0 auto;
}
</style>
