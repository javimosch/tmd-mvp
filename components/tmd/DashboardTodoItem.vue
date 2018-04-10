<template>
    		<li class="DashboardTodoItem list-group-item">
    			<div class="row no-gutters align-items-center">
    				<div class="col-4 self-align-center">
    					<i :class="iconClass"></i>
    				</div>
    				<div class="col-8">
    					<p :class="textClass" v-html="text">Upload ID Document</p>
    				</div>
    			</div>
    		</li>
</template>

<script>
export default {
  name: 'DashboardTodoItem',
  props: ['done','text'],
  fetch() {},
  data() {
    return {}
  },
  async asyncData() {
    return {}
  },
  computed: {
    textClass(){
      return `TodoText ${this.done?'completed':''} p-0 m-0`
    },
    iconClass(){
      return `TodoIcon ${this.done?'completed':''}  fas fa-${this.done?'check-':''}square`
    }
  },
  methods: {

  },
  components: {

  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.DashboardTodoItem {
  max-width: 300px;
}
	.TodoIcon{
		font-size:30px;
		color:$color3;
	}
	.TodoText{
		color: $color5;
    font-size:14px;
	}
	
	.TodoText.completed{
		color: grey;
	}
</style>
