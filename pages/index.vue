<template>
  <div>

    <see-also title="See also" :questions="allQuestions"></see-also>


    <tdm-landing v-if="props.isLanding"></tdm-landing>

    <tdm-chat :title="props.title" v-if="!props.isLanding">
      <div slot="items">
        <tmd-chat-message>
          <div>
            <p v-html="props.message"></p>
          </div>
        </tmd-chat-message>

        <chat-input v-model="chatInput" :canWrite="false">
            <div slot="options">
              <message-option
                v-for="item in questions" 
                :key="item.code" 
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
import SeeAlso from '@/components/tmd/mvp/SeeAlso';
import TdmLanding from '@/components/tmd/landing/LandingV1';
import TdmChat from '@/components/tmd/mvp/ChatV1';
import TmdChatMessage from '@/components/tmd/mvp/ChatMessage';
import MessageOption from '@/components/tmd/mvp/ChatMessageOption';
import ChatInput from '@/components/tmd/mvp/ChatInput';
import { mapState } from 'vuex';
let props = {};
if(Object.keys(props).length==-0){
  props.code = 400;
  props.isLanding = false;
}
export default {
  layout: 'tmd-landing',
  name:"home",
  head () {
    return {
      title: this.props.title,
      meta: [
        { hid: 'description', name: 'description', content: this.props.description }
      ]
    }
  },
  filters: {
    json: (value) => { return JSON.stringify(value, null, 2) }
  },
  async created(){
    if(!process.server && !this.props.isLanding){
      await this.$store.dispatch('tmdOrder/sync',this.props.code);
      if(!this.$store.state.tmdOrder.current){
        await this.$store.dispatch('tmdOrder/create', this.props); 
      }
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
  computed:mapState({
    questions: state=>state.tmdQuestions.availableItems,
    allQuestions: state=>state.tmdQuestions.items.filter(q=>q.isMain===true)
  }),
  components: {
  TdmLanding,
  TdmChat,
  TmdChatMessage,
  MessageOption,
  ChatInput,
  SeeAlso
  },
  methods:{
    
  }
}

</script>
<style lang="scss" scoped>

</style>
