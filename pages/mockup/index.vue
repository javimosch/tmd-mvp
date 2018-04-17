<template>
	<div class="Mockups container mx-auto mt-5 mb-5">
		<h4 class="mb-2 text-center">Index</h4>
		<ul class="list-group">
			<li class="list-group-item"><router-link  to="/mockup/1">Slide 01 : Landing with start button.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/2">Slide 02 : Start help text.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/3">Slide 03 : Number of benefits.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/4">Slide 04 : Benefits circles display.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/5">Slide 05 : Benefit details modal.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/6">Slide 06 : User reply more questions and benefits percentages increases.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/7">Slide 07 : Chatbot stops requesting questions, Continue button.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/8">Slide 08 : Order checkout.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/9">Slide 09 : Order checkout Information modal.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/10">Slide 10 : Order checkout Payment modal.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/11">Slide 11 : User dashboard.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/12">Slide 12 : Click todo call to action modal.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/13">Slide 13 : Click benefit details to see progress.</router-link></li>
			<li class="list-group-item"><router-link  to="/mockup/14">Slide 14 : Billing view.</router-link></li>
		</ul>
	</div>
</template>
<script>
	export default {
		middleware:['auth'],
		layout: 'public',
		name: 'Mockups',
		props:[],
		fetch(){

		},
		async asyncData(){
			return {}
		},
		computed:{

		},
		methods:{

		},
		components:{

		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.Mockups{
	
}
</style>