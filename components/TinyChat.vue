<template>
<div class="TinyChat float-right d-block">
  <div class="Content"
       ref="content">
    <div v-for="(m,key) in messages"
         :key="key"
         class="row">
      <div class="col-12">
        <div :class="getMessageClass(m.value)"
             :style="m.style"></div>
      </div>
    </div>
  </div>
  <div class="Input">
    <input disabled>
    <div class="Arrow">&nbsp;</div>
  </div>
</div>

</template>

<script>
import anime from 'animejs';
import $ from 'jquery';
export default {
  name: 'TinyChat',
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
    animateUserMessage() {
      let els = $('.TinyChat .User').toArray()
      // els = els.filter()
      if (!el) {
        return
      }
      var cssProperties = anime({
        targets: this.$refs.paper,
        // opacity: .5,
        left: [
          {
            value: '-2px',
            duration: 2000
          },
          {
            value: '10px',
            duration: this.timeout - 2000
          }
        ],
        scale: [
          {
            value: 1.1,
            duration: 1000
          },
          {
            value: 1,
            duration: 1000
          },
          {
            value: 0.1,
            duration: this.timeout - 2000
          }
        ],
        // backgroundColor: '#FFF',
        easing: 'easeInOutQuad',
        rotate: '15deg',
        duration: this.timeout,
        direction: 'alternate',
        loop: true
      })
    },
    getMessageClass(value) {
      return value.toString() === '1' ? 'User' : 'Bot'
    },
    addRandomMessage() {
      // this.animateUserMessage()
      var self = this
      if (parseInt(Math.random() * 10, 10) > 5) {
        this.messages.push({
          style: `width:${parseInt(Math.random() * 15, 10) + 45}px;height:${parseInt(Math.random() * 2, 10) + 8}px;`,
          value: 1
        })
      } else {
        this.messages.push({
          style: `width:${parseInt(Math.random() * 15, 10) + 45}px;height:${parseInt(Math.random() * 2, 10) + 8}px;`,
          value: 0
        })
      }
      self.scrollToBottom()
      setTimeout(() => self.addRandomMessage(), (parseInt(Math.random() * 1, 10) + 2) * 1000)
    },
    scrollToBottom() {
      var el = this.$refs.content
      if (el) {
        $(el).animate({
          scrollTop: el.scrollHeight
        }, 1000)
      }
    }
  },
  components: {

  },
  created() {},
  mounted() {
    if (!process.server) {
      return this.addRandomMessage()
    }
  }
}

</script>

<style lang="scss" scoped="">
.TinyChat {
  width: 135px;
  height: 110px;
  border: 1px solid white;
  padding: 5px;
  border-radius: 5px;
}

.Content {
  height: 80px;
  background-color: white;
  padding: 5px;
  overflow: hidden;
}

.Bot {
  border-radius: 5px;
  width: 25px;
  height: 6px;
  background-color: rgb(229, 228, 234);
  margin-bottom: 2px;
}

.User {
  border-radius: 5px;
  width: 25px;
  height: 6px;
  float: right;
  background-color: $color2;
  margin-bottom: 2px;
}

.Input {
  padding: 5px;
  position: relative;
}

input {
  width: -webkit-fill-available;
  border-radius: 10px;
  background: white;
  height: 12px;
  border: 1px solid white;
  position: absolute;
  left: 0px;
}

.Arrow {
  z-index: 1;
  position: absolute;
  right: 5px;
  top: 0px;
}
</style>
