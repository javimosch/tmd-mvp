<template>
	<div class="LoadingDots">
		<p class="LoadingDotsP"><span>.</span><span>.</span><span>.</span></p>
	</div>
</template>
<script>
	export default {
		name: 'LoadingDots',
		props:[],
		fetch(){

		},
		data(){
			return{}
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
.LoadingDots{
	
}
.LoadingDotsP{
	line-height: 10px;
    padding: 0px 20px;
}
.LoadingDotsP span {
  font-size: 50px;
  animation-name: blink;
  animation-duration: 1.4s;
  animation-iteration-count: infinite;
  animation-fill-mode: both;
}

.LoadingDotsP span:nth-child(2) {
  animation-delay: .2s;
}

.LoadingDotsP span:nth-child(3) {
  animation-delay: .4s;
}

@keyframes blink {
  0% {
    opacity: .2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: .2;
  }
}
</style>