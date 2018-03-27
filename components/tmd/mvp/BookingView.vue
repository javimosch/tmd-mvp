<template>
	<div class='BookingView'>
		
    <div class="row mt-0 p-0 ml-0 mr-0 justify-content-center">
      <div class="col-md-6 m-0 p-0 mt-4 ">
        <div class="row mt-0 p-0 justify-content-center">
          <div class="col-md-auto m-0 p-0 w-50 ">
          <h6 class="ChatTitle text-center" v-html="title"></h6>
          </div>
        </div>
        <div class="row mt-0 p-0 ml-0 mr-0 justify-content-center">
          <div class="col-md-12 m-0 p-0 w-100 ">
            <div class="ChatView row">
                
                  <div class="col-md-12 m-0 p-0 align-self-start">
                    <slot name="items"></slot> 
                  </div>
                
                
                    <div class="col-md-12 m-0 p-0 align-self-end">
                      <slot name="bottom">
                      </slot>
                    </div>
                
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 m-0 p-4 mt-4">
        
        <div class="row mt-0 p-0 ml-0 mr-0 justify-content-center">
          <div class="col-md-auto m-0 p-0 w-100">
          <h2 v-if="false" class="text-center pb-1" v-html="'Compréhension de ma question'"></h2>
          <progress-bar :value="statusProgress" class="mb-3"></progress-bar>
          </div>
        </div>
        <div class="row mt-0 p-0 ml-0 mr-0 justify-content-center">
          <div class="BookingStatusView">
            <b-list-group>
            <slot name="orderResume"></slot> 
            
            
          </b-list-group>
          </div>  
        </div>
        
        <div class="row mt-5 p-0 justify-content-center">
          <div class="col-md-auto m-0 p-0 w-50">
          <h2 class="text-center" v-html="'Mes Documents'"></h2>
          </div>
        </div>
        <div class="row mt-1 p-0 justify-content-center">
          <booking-documents></booking-documents>
        </div>
      </div>
    </div>


	</div>
</template>
<script>
import BookingDocuments from '@/components/tmd/mvp/BookingDocuments';
import ProgressBar from '@/components/ProgressBar';
export default {
  name:"BookingView",
  props:['title','statusProgress'],
  mounted(){
    
  },
	components: {
    ProgressBar,
    BookingDocuments
  }
}	;
</script>
<style lang="scss" scoped>
.ChatTitle{
  font-size:12px;
  padding-bottom:5px;
}
.BookingStatusView{
  max-height:150px;
  overflow: scroll;
}
.ChatView{
  min-height: 400px;
  max-height: 400px; 
  @media only screen and (min-width: 992px) {
    
  }
  @media only screen and (min-height: 768px) {
    min-height: 500px;
    max-height: 500px;  
  }
  
  flex: 1;
  overflow-y: scroll;
}
.BookingView{
  border:0px;
}
</style>