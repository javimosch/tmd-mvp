<template>
	<div class="ChatContent scrollbar">
		<div class="row m-0 p-0">
			<div class="col m-2 mr-4 p-0">
				<ChatMessageBot>
					<p slot="message">
						Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum 
						Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
						Lorem IpsumLorem Ipsum
					</p>
				</ChatMessageBot>

				<ChatMessageBot>
					<p slot="message">
						Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum 
					</p>
				</ChatMessageBot>
				<ChatMessageBot>
					<p slot="message">
						Lorem IpsumLore
					</p>
				</ChatMessageBot>
				<ChatMessageBot>
					<p slot="message">
						Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum 
						Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
						Lorem IpsumLorem Ipsum
					</p>
				</ChatMessageBot>
				<ChatMessageBot>
					<p slot="message">
						Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum 
						Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
						Lorem IpsumLorem Ipsum
					</p>
				</ChatMessageBot>

			</div>
		</div>
	</div>
</template>
<script>
	import ChatMessageBot from '@/components/tmd/ChatMessageBot';
	export default {
		name: 'ChatContent',
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
			ChatMessageBot
		},
		created(){

		},
		mounted(){

		}
	}
</script>
<style lang="scss" scoped>
.ChatContent{
	overflow: auto;
	max-height: 200px;
	@media only screen and (min-width: 768px) {

	}
	@media only screen and (min-width: 992px) {
		min-height: 390px;
	    max-height: 390px;
	 }
}
</style>