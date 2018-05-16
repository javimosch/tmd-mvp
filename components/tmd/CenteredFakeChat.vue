<template>
<div class="CenteredFakeChatWrapper container-fluid m-0 p-0">
  <div class="row no-gutters">
    <div class="col-md-6">
      <div class="CenteredFakeChat container">
        <div class="row no-gutters align-items-start m-0 p-0">
          <div class="col align-self-center m-0 p-0">
            <Chat ref="chat"
                  class="ChatWrapper"
                  :showMessagesSample="false">
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
              <div class="row.no-gutters w-100"
                   v-show="showContinue">
                <div class="col-12 w-100">
                  <button slot="options"
                          @click="continueButtonClick()"
                          type="button"
                          class="btn btn-primary btn-lg ContinueButton mx-auto d-block">CONTINUER</button>
                </div>
              </div>
            </Chat>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6 RightColumn">
      <h5 id="decouvrez-vos-aides"
          class="RightTextTitle">Découvrez vos aides</h5>
      <p class="RightText">Discutez avec Lisa !
        <br> Elle vous donnera toutes les aides auxquelles vous avez droit et se chargera des démarches...</p>
    </div>
  </div>
</div>

</template>

<script>
import { setGlobalAnchorSmoothScroll } from '@/plugins/scrolling';
import $ from 'jquery';
import ChatMessageBot from '@/components/tmd/ChatMessageBot';
import ChatMessageUser from '@/components/tmd/ChatMessageUser';
import Chat from '@/components/tmd/Chat';
import Typed from 'typed.js';
var state = {
  messages: null,
  typedInstances: {}
}
export default {
  name: 'CenteredFakeChat',
  props: [],
  fetch() {},
  data() {
    return {
      showContinue: false,
      messages: []
    }
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {
    continueButtonClick() {
      $ma.trackEvent({
        category: 'button',
        action: 'click',
        label: 'demo_chat_continue_button'
      })
      $('html, body').animate({
        scrollTop: $('#laissez-nous-faire-les-demarches').offset().top - 50
      }, 500)
    }
  },
  components: {
    Chat,
    ChatMessageBot,
    ChatMessageUser
  },
  created() {},
  destroyed() {
    var self = this
    Object.keys(state.typedInstances).forEach(k => {
      state.typedInstances[k].destroy()
      delete state.typedInstances[k]
    })
  },
  async mounted() {
    if (process.server) {
      return
    }

    if (window.__typed) {
      Object.keys(window.__typed).forEach(k => {
        window.__typed[k].destroy()
        delete window.__typed[k]
      })
    }

    this.$store.commit('tmdChat/setInputDisabled', true)
    const self = this
    state.messages = this.messages

    cycle(async() => {
      self.showContinue = false
      await clearMessages(self)
      /**/
      await addMessage(`Bonjour, je m’appelle Lisa ! 
Je vais vous aider à trouver toutes les aides de l'Etat auxquelles vous avez droit`, false, 1, 0.2)
      await addMessage('D’ailleurs, comment vous appelez-vous ?', false, 0.5, 0.5)
      await addMessage('Chloé', true, 0.5, 0.5) // USER
      await addMessage('Enchantée Chloé !', false, 1, 0.2)
      await addMessage('Que faites-vous dans la vie ?', false, 1, 0.2)
      await addMessage('Je suis étudiante en 1ère année de médecine', true, 0.5, 0.5) // USER
      await addMessage('Félicitations ! On a tant besoin de médecins :)', false, 1, 0.2)
      await addMessage('Et dans quelle Université étudiez-vous aujourd\'hui ?', false, 1, 0.2)
      await addMessage('A Paris Descartes', true, 0.5, 0.5) // USER
      await addMessage(`Très bien
Est-ce que vous résidez à Paris ?`, false, 1, 0.2)
      await addMessage('Oui, j\'habite au 12 avenue de Laumière', true, 0.5, 0.5) // USER
      await addMessage(`D'accord, dans le 19ème arrondissement donc`, false, 1, 0.2)
      await addMessage(`Vivez-vous seule ? En collocation ? Chez vos parents ?`, false, 1, 0.2)
      await addMessage('Je vis seule', true, 0.5, 0.5) // USER
      await addMessage(`C'est noté Chloé. Nous allons maintenant parler de votre situation financière`, false, 1, 0.2)
      await addMessage(`Recevez-vous de l'argent de vos parents ?`, false, 1, 0.2)
      await addMessage('Oui, 300 € par mois', true, 0.5, 0.5) // USER
      await addMessage(`D'accord et quels sont les revenus de vos parents ?`, false, 1, 0.2)
      await addMessage('Mon père gagne 1 300 €/mois, ma mère 1 600 €/mois', true, 0.5, 0.5) // USER
      await addMessage(`D'accord. Ce sont des rémunérations brutes ou nettes ?`, false, 1, 0.2)
      await addMessage('Brut', true, 0.5, 0.5) // USER        
      await addMessage(`C'est noté. Et où habitent vos parents ?`, false, 1, 0.2)
      await addMessage('A Toulouse', true, 0.5, 0.5) // USER
      await addMessage(`Ah la ville rose !`, false, 1, 0.2)
      await addMessage(`Avez-vous des frères et soeurs ?`, false, 1, 0.2)
      await addMessage('2 petites soeurs de 12 et 15 ans', true, 0.5, 0.5) // USER
      await addMessage(`D'accord, et vous Chloé quel âge avez-vous ?`, false, 1, 0.2)
      await addMessage('19 ans', true, 0.5, 0.5) // USER
      await addMessage(`Merci pour toutes ces informations, je peux déjà vous dire que vous avez droit à 5 aides financières. Le montant total s'élève à 6 768 €`, false, 1, 0.2)
      await addMessage(`Aide 1 : Bourse étudiante du CROUS = 3 218 €`, false, 1, 0.2)
      await addMessage(`Aide 2 : Aide au logement de la CAF = 2 450 €`, false, 1, 0.2)
      await addMessage(`Aide 3 : Aide pour meubler votre logement (AILE) = 900 €`, false, 1, 0.2)
      await addMessage(`Aide 4 : Aide pour une complémentaire santé = 200 €`, false, 1, 0.2)

      await addMessage(`Aide 5 : Chloé, vous avez également droit à un logement universitaire CROUS`, false, 1, 0.2)
      await addMessage('Merci beaucoup, c\'est top !', true, 0.5, 0.5)
      await addMessage('C\'est compliqué de demander l\'AILE ?', true, 0.5, 0.5)
      await addMessage(`Pas d\’inquiétude, je me charge de toutes les démarches avec chaque organisme`, false, 1, 0.2)
      
      await addMessage(`Il vous suffit de cliquer sur CONTINUER. Vous recevrez directement les 900 € sur votre compte et des frais de dossiers (18 €) seront prélevés une fois que vous aurez reçu l'argent`, false, 1, 0.2)
      self.showContinue = true
    }, 40000000)
    setGlobalAnchorSmoothScroll()

  }
}

async function cycle(handler, milli) {
  try {
    await handler()
    setTimeout(() => cycle(handler, milli), milli)
  } catch (err) {
    console.error(err)
  }
}

async function clearMessages(cmp) {
  state.messages = cmp.messages = []
}

async function addMessage(message, isUser = false, loadingSeconds = 1, startInSeconds = 0) {
  await waitSeconds(startInSeconds)

  if (isUser) {
    await typedMessage([
      message
    ], 25, 0.5)
  } else {
    if (loadingSeconds < 1) {
      loadingSeconds = 1
    }
  }

  state.messages.push({
    loading: isUser ? false : true,
    class: 'animated fadeIn',
    isUser: isUser,
    text: message
  })

  if (!isUser) {
    await scrollToBottom()
    await waitSeconds(loadingSeconds)
    state.messages[state.messages.length - 1].loading = false
    await scrollToBottom()
  } else {
    await scrollToBottom()
  }
}

function typedMessage(strings, speed = 2, waitToDelete = 1) {
  var self = this
  var selector = '.ChatInputControl'
  return new Promise((resolve, reject) => {
    var options = {
      strings: strings,
      typeSpeed: speed,
      onComplete: async() => {
        await waitSeconds(waitToDelete)
        $(selector).val('')
        typed.destroy()
        delete state.typedInstances[typed.id]
        resolve()
      }
    }
    var typed = new Typed(selector, options)
    typed.id = Date.now()
    state.typedInstances[typed.id] = typed

    if (!process.server) {
      window.__typed = window.__typed || {}
      window.__typed[typed.id] = typed
    }

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
    }, 1000, function() {
      resolve()
    })
  })
}

</script>

<style lang="scss" scoped="">
.CenteredFakeChat {
  opacity: 1;
  max-width: 900px;
  margin: 0 auto;
}

.ChatWrapper {
  max-width: 500px;
  float: right;
}

.RightColumn {
  background-color: #F7F9FA;
  padding: 50px;
  min-height: 640px;
}

.RightText {
  line-height: 40px;
  font-weight: 400;
  font-size: 20px;
  color: #a9a9a9;
  max-width: 450px;
  margin: 20px 0px 0px 0px;
}

.RightTextTitle {
  max-width: 992px;
  line-height: 40px;
  font-size: 35px;
  color: #a9a9a9;
  padding: 0px;
  margin: 20px 0px 50px 0px;
  font-weight: 300;
  letter-spacing: 3px;
}

.ContinueButton {
  border-radius: 15px;
  min-width: 230px;
  margin: 0 auto;
  margin-top: 20px;
}
</style>
