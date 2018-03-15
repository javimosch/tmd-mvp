<template>
	<div class="row justify-content-center align-items-start">
		<div class="col-md-auto">
			<input class="demo_chat_input text-center mx-auto d-block" :placeholder="text" :value="value" />
		</div>
	</div>  
</template>
<script>
import Typed from 'typed.js';
import {TweenMax, Power2, TimelineLite} from "gsap";
  export default {
  	data(){
  		return {
  			text:'What are you waiting for?',
  			value:''
  		}
  	},
  	mounted(){
  		var self = this;
  		self.changeColor();

  		var options = {
  strings: ["Vos droits expliqués simplement", "Mon Travail.","Ma Santè",'Ma Familie','Etc'],
  typeSpeed: 40
}

var typed = new Typed(".demo_chat_input", options);
  	},
  	methods:{
  		changeColor(up){
  			var self = this;
  			var onComplete = ()=>{
  				setTimeout(()=>self.changeColor(!up),0);
  			};
  			if(up){
  				//TweenLite.to(".demo_chat_input", 1, {'font-size':18,onComplete:onComplete});
  			}else{
  				//TweenLite.to(".demo_chat_input", 1, {'font-size':12,onComplete:onComplete});
  			}
  		}
  	}
  }
</script>
<style lang="scss" scoped>
input{
	color: $color5;
  font-size: larger;
	border-radius:10px;
	width:300px;
  margin: 0 auto;
  margin-top:0px;
	height:80px;
  background-color:$color1;
	border: 1px solid $color1;
	@media only screen and (min-width: 480px) {
		width:400px;
	}
  @media only screen and (min-width: 992px) {
    width:600px;
  }
}
input:hover,input:active,input:focus{
	box-shadow:none;
	outline:0;
}
</style>