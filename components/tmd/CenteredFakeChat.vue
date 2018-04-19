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
  destroyed(){
    if(state.typed && state.typed.destroy) state.typed.destroy();
  },
  async mounted() {
    if (process.server) {
      return
    }

    this.$store.commit('tmdChat/setInputDisabled', true)
    const self  = this;
    state.messages = this.messages

    cycle(async() => {
      
        await clearMessages(self);
        await addMessage(`Bonjour, je m’appelle Lisa !
Je vais vous aider à trouver toutes les aides de l'Etat auxquelles vous avez droit`, false, 0.2);
        await addMessage('D’ailleurs, comment t’appelles-tu ?', false, 0.5,0.5)
        await addMessage('Chloé!', true, 0.5,0.5)//USER
        await addMessage('Enchantée Chloé !', false, 2, 0.2)
      
        await addMessage('Que faites-vous dans la vie ?', false, 2, 0.2)
        await addMessage('Je suis étudiante en 1ère année de médecine', true, 0.5,0.5)//USER
        await addMessage('Félicitation ! On a tant besoin de médecins :)', false, 2, 0.2)
        await addMessage('Vous avez sûrement eu des bonne notes au bac', false, 2, 0.2)
        await addMessage('Oui mention très bien :)', true, 0.5,0.5)//USER
        await addMessage('Bravo !', false, 2, 0.2)
        await addMessage("Et dans quelle Université étudiez-vous aujourd'hui ?", false, 2, 0.2)
        await addMessage('A Paris Descartes', true, 0.5,0.5)//USER
        await addMessage(`Très bien
Est-ce que vous résidez dans Paris ?`, false, 0.2);
        await addMessage("Oui, j'habite au 12 avenue de Laumière", true, 0.5,0.5)//USER
        await addMessage(`D'accord, dans le 19ème arrondissement donc`, false, 0.2);
        await addMessage(`Vivez-vous seule ? En couple ? En collocation ? Chez vos parents ?`, false, 0.2);
        await addMessage("Je vis seule", true, 0.5,0.5)//USER
        await addMessage(`C'est noté Chloé. Nous allons maintenant parler de votre situation financière.`, false, 0.2);
        await addMessage(`Recevez-vous de l'argent de vos parents ?`, false, 0.2);
        await addMessage("Oui, 300 € par mois", true, 0.5,0.5)//USER
        await addMessage(`D'accord et avez-vous d'autres revenus ? 
Par exemple, avez-vous un travail en parallèle de vos études ?`, false, 0.2);
        await addMessage("Non, j'ai pas le temps", true, 0.5,0.5)//USER
        await addMessage(`Oui les études demandent du temps`, false, 0.2);        
        await addMessage(`Est-ce que je peux vous demander les revenus de vos parents ?`, false, 0.2);        
        await addMessage("Oui, mon père gagne 1 300 € par mois et ma mère 1 600 € par mois.", true, 0.5,0.5)//USER
        await addMessage(`D'accord. Ce sont des rémunérations brutes ou nettes ?`, false, 0.2);
        await addMessage("Brut", true, 0.5,0.5)//USER        
        await addMessage(`C'est noté`, false, 0.2);        
        await addMessage(`Et où habitent vos parents`, false, 0.2);        
        await addMessage("A Toulouse", true, 0.5,0.5)//USER
        await addMessage(`Ah la ville rose !`, false, 0.2);        
        
        await addMessage(`Avez-vous des frères et soeurs ?`, false, 0.2);        
        await addMessage("2 petites soeurs de 12 et 15 ans.", true, 0.5,0.5)//USER
        await addMessage(`D'accord, et vous Chloé quel âge avez-vous ?`, false, 0.2);        
        await addMessage("19 ans", true, 0.5,0.5)//USER
        await addMessage(`Merci pour toutes ces informations, je peux déjà vous dire que vous avez droit à 7 aides financières. Le montant total s'élève à 7 768 €`, false, 0.2);
        await addMessage(`Aide 1 : Bourse étudiante du CROUS = 3 218 €`, false, 0.2);        
        await addMessage(`Aide 2 : Aide au logement de la CAF = 2 450 €`, false, 0.2);        
        await addMessage(`Aide 3 : Bourse au mérite de la région Ile-de-France = 1 000 €`, false, 0.2);        
        await addMessage(`Aide 4 : Aide pour meubler ton logement (AILE) = 900 €`, false, 0.2);        
        await addMessage(`Aide 5 : Aide pour payer une complémentaire santé = 200 €`, false, 0.2);        
        await addMessage(`Aide 6 : Chloé, vous avez également droit à un logement universitaire CROUS`, false, 0.2);        
        await addMessage(`Aide 7 : Enfin, vous pouvez demander un prêt étudiant de 15 000 € pour lequel l'Etat se portera caution`, false, 0.2);    
           
        await addMessage("Merci beaucoup, c'est top !", true, 0.5,0.5)//USER
      
    }, 40000);

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
    ],2,0.5)
  }else{
    if(loadingSeconds<1){
      loadingSeconds=1
    }
  }

  state.messages.push({
    loading: isUser ? false : true,
    class: 'animated fadeIn',
    isUser: isUser,
    text: message
  })
  await scrollToBottom()
  if (!isUser) {
    await waitSeconds(loadingSeconds)
    state.messages[state.messages.length - 1].loading = false
    await scrollToBottom()
  }
  
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
        delete window.d[typed.id];
        resolve()
      }
    }
    var typed = new Typed(selector, options)
    typed.id = Date.now();
    window.d = window.d||{};
    window.d[typed.id]=typed;
    state.typed = typed;
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
  opacity: 1;
  max-width: 500px;
  margin: 0 auto;
}
</style>
