<template>
<div id="HomePage" class="container">
  <see-also v-if="false"
            title="See also"
            :questions="allNodes"></see-also>
  <tdm-landing v-if="current.isLanding"></tdm-landing>
  <booking-view :statusProgress="statusProgress"
                :title="current.title"
                v-if="!current.isLanding">
    <div slot="orderResume">
      <b-list-group-item>
        Compréhension de ma question
      </b-list-group-item>
      <b-list-group-item>
        Mes Informations
        <ul>
          <li v-for="input in resolvedInputs"
              :key="input.code">
            <a @click="editInput(input)"
               v-html="input.title"></a>
          </li>
        </ul>
      </b-list-group-item>
    </div>
    <div slot="items">
      <!-- CHAT MESSAGE HISTORY -->
      <tmd-chat-message v-for="(m,k) in messages"
                        :key="k" :isUser="m.isUser">
        <div slot="from">
          <span v-html="m.from"
                :class="m.isUser?'isUser':''"> </span>
        </div>
        <div>
          <p v-html="m.text"
             :class="m.isUser?'isUser':''"></p>
        </div>
        <div slot="at">
          <span v-html="messageTime(m.at)"> </span>
        </div>
      </tmd-chat-message>
      <chat-input :inputNode="firstUnresolvedInput"
                  @onSubmit="onSubmitInputAnswer">
        <div slot="options">
          <!-- MULTIPLE CHOICE BUTTONS -->
          <message-option v-for="item in availableNodes"
                          :key="item.code"
                          :disabled="item.disabled"
                          @click.native="!item.disabled && selectNode(item)">
            <span slot="text"
                  v-html="item.title"></span>
          </message-option>
        </div>
      </chat-input>
    </div>
  </booking-view>


</div>

</template>

<script>
import '@/plugins/pdf';
import moment from 'moment';
import DebugScreen from '@/components/tmd/mvp/DebugScreen';
import SeeAlso from '@/components/tmd/mvp/SeeAlso';
import TdmLanding from '@/components/tmd/landing/LandingV1';
import BookingView from '@/components/tmd/mvp/BookingView';
import TmdChatMessage from '@/components/tmd/mvp/ChatMessage';
import MessageOption from '@/components/tmd/mvp/ChatMessageOption';
import ChatInput from '@/components/tmd/mvp/ChatInput';
import _ from 'lodash';
import { mapState } from 'vuex';
import '@/plugins/rpcApi';
let props = {}
if (Object.keys(props).length === -0) {
  props.code = 'T1:Q1'
  props.isLanding = false
}
export default {
  layout: 'tmd-app',
  name: 'home',
  head() {
    return {
      title: this.current.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.current.description
        }
      ]
    }
  },
  filters: {
    json: (value) => {
      return JSON.stringify(value, null, 2)
    }
  },
  async created() {
    if (!process.server && !this.props.isLanding) {
      await this.$store.dispatch('tmdOrder/sync', this.props.code)
      // if(!this.$store.state.tmdOrder.current){
      await this.$store.dispatch('tmdOrder/create', this.props)
    // }
    }
  },
  async asyncData({store}) {
    let self = this
    await store.dispatch('tmdQuestions/syncRoute', props.code)
    return {
      isProduction: process.env.isProduction,
      props: !props.isLanding ? store.state.tmdQuestions.current : props
    }
  },
  computed: Object.assign(mapState({
    messages: state => state.tmdChat.messages,
    orders: state => ({
      all: state.tmdOrder.items,
      current: state.tmdOrder.current
    }),
    previousMessages: state => state.tmdOrder.previousMessages,
    availableInputs: state => state.tmdQuestions.availableInputs,
    availableNodes: state => state.tmdQuestions.availableItems.map(v => {
      if (!process.env.isProduction) {
        v = _.cloneDeep(v)
        v.title += ` (${v.code})`
      }
      v.disabled = v.disabled === true
      return v
    }),
    allNodes: state => state.tmdQuestions.items.filter(q => q.isMain === true)

  }), {
    resolvedInputs() {
      return this.orders.current && this.orders.current.inputs.filter(i => i.resolved === true) || []
    },
    firstUnresolvedInput() {
      let state = this.$store.state
      if (!this.orders.current) {
        return null
      }
      let resolved = this.orders.current.inputs.filter(r => r.resolved).map(i => i.code)
      if (resolved.length === 0) {
        return state.tmdQuestions.availableInputs[0]
      } else {
        return state.tmdQuestions.availableInputs.filter(i => !resolved.includes(i.code))[0] || null
      }
    },
    statusProgress() {
      if (this.previousMessages.length >= 2) {
        return 30
      }
      if (this.previousMessages.length > 3) {
        return 50
      }
      if (this.previousMessages.length > 5) {
        return 70
      }
      if (this.current.isSolution) {
        return 100
      }
      return 25
    },
    current() {
      let state = this.$store.state
      let res = state.tmdOrder.current ? (state.tmdOrder.current.questions[state.tmdOrder.current.questions.length - 1]) : this.props
      return res
    },
    editInput() {},
    allInputsAreResolved() {
      if (!this.orders.current || !this.availableInputs) {
        return false
      }
      if (this.orders.current.inputs.length === this.availableInputs.length && this.orders.current.inputs.filter(r => !r.resolved).length === 0) {
        return true
      }
      return false
    }
  }),
  components: {
    TdmLanding,
    BookingView,
    TmdChatMessage,
    MessageOption,
    ChatInput,
    SeeAlso,
    DebugScreen
  },
  methods: {
    messageTime(at) {
      return moment(at).format('HH:mm')
    },
    async onSubmitInputAnswer(val) {
      await this.$store.dispatch('tmdOrder/resolveInput', {
        input: this.firstUnresolvedInput,
        answer: val
      })
      await this.$store.dispatch('tmdChat/addMessage', {
        from: 'You',
        text: val,
        isUser: true
      })
      console.info('onSubmitInputAnswer', val)
      this.scrollToBottom()
    },
    async selectNode(node) {
      await this.$store.dispatch('tmdQuestions/syncRoute', node.code)
      await this.$store.dispatch('tmdOrder/selectNode', node)
      this.scrollToBottom()
      this.pushInputMessage()
    },
    async scrollToBottom() {
      setTimeout(() => {
        var container = this.$el.querySelector('.ChatView')
        container.scrollTop = container.scrollHeight
      }, 500)
    },
    async pushInputMessage() {
      if (this.firstUnresolvedInput) {
        await this.$store.dispatch('tmdChat/addMessage', {
          from: 'Bot',
          text: this.firstUnresolvedInput.message
        })
      }
    }
  }
}

</script>

<style lang="scss" scoped="">
canvas,
#graphDiv,
#graphDiv,
.vis-network,
canvas {
  width: 100%;
  min-height: 400px;
  border: 2px solid black;
}
</style>
