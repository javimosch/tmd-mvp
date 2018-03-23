<template>
	<div class="BookingDocuments">
		<booking-document
			v-for="doc in documents" :key="doc.code" :data="doc"
			@onPreview="onPreview"
			>
    	</booking-document>

    	
    		<simple-modal-backdrop v-show="backdrop"></simple-modal-backdrop>
    		<simple-modal v-show="modal" class="h-75">
    			<div class="float-right">
    				<b-button variant="secondary" @click="closeModal()">Close</b-button>
    			</div>
    			<iframe ref="preview" class="w-100 h-100 mx-auto"></iframe>
    		</simple-modal>
    	

	</div>
</template>
<script>
	import {SimpleModal, SimpleModalBackdrop} from '@/styledComponents/modal';
	import {renderPdfFromHtml} from '@/plugins/pdf';
	import BookingDocument from '@/components/tmd/mvp/BookingDocument';
	export default {
		name:'BookingDocuments',
		props:[],
		data(){
			return {
				documents:[],
				backdrop:false,
				modal:false
			};
		},
		methods:{
			closeModal(){
				this.modal=false;
				this.backdrop = false;
			},
			async onPreview(doc){
				console.log('onPreview',doc);
				this.backdrop = true;
				let pdf = await renderPdfFromHtml(doc.template);
				var iframe = document.createElement('iframe');
				iframe.setAttribute('style', 'height:100%; width:600px');
				this.$refs.preview.src = pdf.output('datauristring');
				this.modal=true;
			}
		},
		mounted(){
			this.documents = [{
				code:'D:Test',
				template:`
	<div id="print">
		<style scoped>
			span{
				font-size:25px;
				text-align: center;
				text-decoration: underline;
			}
		</style>
		<p style="font-size:8px;text-decoration: underline">I'm on page 1!</p>
  		<div class="html2pdf__page-break"></div>
  		<p>I'm on page 2!</p>
	</div>
	`
			}];
		},
		components:{
			BookingDocument,
			SimpleModal,
			SimpleModalBackdrop
		}
	};
</script>
<style lang="scss" scoped>
.BookingDocuments{
	min-height: 300px;
	min-width: 200px;
}
</style>