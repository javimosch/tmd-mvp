<template>
<div class="Chat">
  <div class="row">
    <div class="col-12">
      <p>The follow view is intended for development.</p>
      <span><b>(Nothing to show yet)</b></span>
    </div>
  </div>
  <div class="row">
    <div class="col-12 col-sm-8 col-md-6 col-lg-6 mt-3">
      <UsersSelectKey label="Select an user"
                      placeholder="Search by name (press ENTER)"
                      v-model="item._id"
                      @change="onUserChange"></UsersSelectKey>
    </div>
    <div class="col-12 mt-2">
      <UserOrdersTable :title="false"
                       :item="item"></UserOrdersTable>
    </div>
    <div class="col-12 mt-2">
      <b-btn size="lg"
        :disabled="!isStartButtonEnabled"
             @click="startChat()"
             variant="success">Start</b-btn>
    </div>
  </div>
  <hr class="mt-5 mb-5">
  <TwoSidesDiv rightBackgroundColor="#EEEEEE">
    <div slot="left"
         class="row row align-items-start m-0 p-0">
      <div class="col align-self-center m-0 p-0">
        <ChatOne></ChatOne>
      </div>
    </div>
    <div slot="right">
      <CenterBottomText color="#212431"
                        size="20px"
                        top="150px"
                        lineHeight="35px">
        <p>
          Discutez avec Chloé !
          <br> Elle trouvera toutes les aides financières
          <br> auxquelles vous avez droit.
          <br> Elle fera même les démarches pour vous ;)
        </p>
      </CenterBottomText>
    </div>
  </TwoSidesDiv>
</div>

</template>

<script>
import tmdChat from '@/plugins/tmdChat';
import UsersListView from '@/components/tmd/controls/UsersListView';
import UserOrdersTable from '@/components/tmd/controls/UserOrdersTable';
import UsersSelectKey from '@/components/tmd/controls/UsersSelectKey';
import { call } from '@/plugins/rpcApi';
import TwoSidesDiv from '@/components/tmd/TwoSidesDiv';
import ChatOne from '@/components/tmd/version1/Chat';
import CenterBottomText from '@/components/tmd/CenterBottomText';
export default {
  layout: 'app',
  name: 'Chat',
  props: [],
  fetch() {},
  data() {
    return {
      item: {
        _id: '',
        orders: []
      }
    }
  },
  async asyncData() {
    return {}
  },
  computed: {
    isStartButtonEnabled(){
      return this.item._id&&!tmdChat.isProcessing()
    }
  },
  methods: {
    async startChat() {
      await tmdChat.start(this.item._id, this.$store)
    },
    async onUserChange(user) {
      Object.assign(this.item, user)
    }
  },
  components: {
    TwoSidesDiv,
    ChatOne,
    CenterBottomText,
    UsersSelectKey,
    UsersListView,
    UserOrdersTable
  },
  created() {
    call('findOne', {
      model: 'setting',
      query: {
        name: 'default'
      },
      populate: [
        {
          path: 'fieldGroups',
          populate: {
            path: 'fields'
          }
        }
      ]
    }).then(console.info).catch(console.warn)
  },
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.Chat {}
</style>
