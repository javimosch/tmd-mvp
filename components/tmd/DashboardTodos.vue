<template>
<div class="DashboardTodos p-5">
  <div class="row row align-items-start justify-content-center m-0 p-0">
    <div class="col align-self-center m-0 p-0">
    	<ul class="list-group mx-auto d-block">
    		
    		<DashboardTodoItem :done="false" text="Upload ID Document"></DashboardTodoItem>
    		<DashboardTodoItem :done="true" text="Payment completed"></DashboardTodoItem>
    		<DashboardTodoItem :done="true" text="Give email"></DashboardTodoItem>
    		<DashboardTodoItem :done="true" text="Give first name"></DashboardTodoItem>
    		<DashboardTodoItem :done="true" text="Give family name"></DashboardTodoItem>
    		<DashboardTodoItem :done="true" text="Give home address"></DashboardTodoItem>
    		<DashboardTodoItem :done="true" text="Give phone"></DashboardTodoItem>
    		
    		
    	</ul>
    </div>
  </div>
</div>

</template>

<script>

import DashboardTodoItem from '@/components/tmd/DashboardTodoItem';
export default {
  name: 'DashboardTodos',
  props: [],
  fetch() {},
  data() {
    return {}
  },
  async asyncData() {
    return {}
  },
  computed: {

  },
  methods: {

  },
  components: {
	DashboardTodoItem
  },
  created() {},
  mounted() {}
}

</script>

<style lang="scss" scoped="">
.DashboardTodos {}
  ul{
    max-width: 300px;
  }
</style>
