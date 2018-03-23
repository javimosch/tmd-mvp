<template>
	<div class="BookingDocument">
		<div class="Backdrop" @click="()=>$emit('onPreview', data) ">
			<vertical-centered-content>
				<i class="fas fa-search"></i>
			</vertical-centered-content>
		</div>
		<iframe ref="iframe" class="BookingDocumentIframe">
		</iframe>
	</div>
</template>
<script>
import VerticalCenteredContent from '@/components/VerticalCenteredContent';
export default {
		name:'BookingDocument',
		props:['data'],
		mounted(){
			if(!process.server){
				this.$refs.iframe.contentWindow.document.body.innerHTML = this.data.template;
			}
		},
		components:{
			VerticalCenteredContent
		}
	};
</script>
<style lang="scss" scoped>
.BookingDocumentIframe{
	position: absolute;
	top:0px;
	width:100%;
	height:100%;
	border:0px;
}
.BookingDocument{
	border:1px solid $color1;
	position:relative;
	max-height: 300px;
	min-height: 300px;
	min-width: 200px;
	max-width: 200px;
}

.Backdrop{
	display: none;
	background-color:rgba(235, 237, 246, 0.8);
	position: absolute;
	top:0px;
	width:100%;
	height:100%;
	z-index: 200;
}
.BookingDocument:hover .Backdrop{
	display:block;
	cursor:pointer;
}
i{
	font-size:45px;
	opacity:0.8
}

</style>