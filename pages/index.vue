<template>
  <div>

    <see-also title="See also" :questions="allQuestions"></see-also>

    <debug-screen :data="orders"></debug-screen>

    <tdm-landing v-if="current.isLanding"></tdm-landing>

    <tdm-chat :title="current.title" v-if="!current.isLanding">
      <div slot="items">
        
        <tmd-chat-message
                v-for="item in previousMessages" 
                :key="item.code"
                >
          <div>
            <p v-html="item.message"></p>
          </div>
        </tmd-chat-message>

        <tmd-chat-message>
          <div>
            <p v-html="current.message"></p>
          </div>
        </tmd-chat-message>

        <chat-input v-model="chatInput" :canWrite="false">
            <div slot="options">
              <message-option
                v-for="item in questions" 
                :key="item.code"
                @click.native="selectNode(item)" 
                >
                  <span slot="text" v-html="item.title"></span>
              </message-option>
            </div>
        </chat-input>

      </div>
    </tdm-chat>

  </div>
</template>
<script>
import DebugScreen from '@/components/tmd/mvp/DebugScreen';
import SeeAlso from '@/components/tmd/mvp/SeeAlso';
import TdmLanding from '@/components/tmd/landing/LandingV1';
import TdmChat from '@/components/tmd/mvp/ChatV1';
import TmdChatMessage from '@/components/tmd/mvp/ChatMessage';
import MessageOption from '@/components/tmd/mvp/ChatMessageOption';
import ChatInput from '@/components/tmd/mvp/ChatInput';
import { mapState } from 'vuex';
let props = {};
if(Object.keys(props).length==-0){
  props.code = 300;
  props.isLanding = false;
}
export default {
  layout: 'tmd-landing',
  name:"home",
  head () {
    return {
      title: this.current.title,
      meta: [
        { hid: 'description', name: 'description', content: this.current.description }
      ]
    }
  },
  filters: {
    json: (value) => { return JSON.stringify(value, null, 2) }
  },
  async created(){
    if(!process.server && !this.props.isLanding){
      await this.$store.dispatch('tmdOrder/sync',this.props.code);
      //if(!this.$store.state.tmdOrder.current){
        await this.$store.dispatch('tmdOrder/create', this.props); 
      //}
    }
  },
  async asyncData({store}){
      let self = this;
      await store.dispatch('tmdQuestions/syncRoute', props.code);
      return {
        chatInput:'',
        props: !props.isLanding?store.state.tmdQuestions.current:props
      };
  },
  computed:Object.assign(mapState({
    orders: state=>({
      all:state.tmdOrder.items,
      current:state.tmdOrder.current
    }),
    previousMessages: state=>state.tmdOrder.previousMessages,
    questions: state=>state.tmdQuestions.availableItems,
    allQuestions: state=>state.tmdQuestions.items.filter(q=>q.isMain===true)
  }),{
    current(){
      let state = this.$store.state;
      return state.tmdOrder.current?(state.tmdOrder.current.questions[state.tmdOrder.current.questions.length-1]):this.props;
    }
  }),
  components: {
  TdmLanding,
  TdmChat,
  TmdChatMessage,
  MessageOption,
  ChatInput,
  SeeAlso,
  DebugScreen
  },
  methods:{
    selectNode(node){
        this.$store.dispatch('tmdOrder/selectNode', node);
        this.$store.dispatch('tmdQuestions/syncRoute', node.code);
    }
  }
}

</script>
<style lang="scss" scoped>

</style>
