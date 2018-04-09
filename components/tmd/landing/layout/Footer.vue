<template>
	<div class="Footer">
		<div class="row">
		<footer class="w-100">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h1 class="footer_center_text w-100 text-center">Contact Us<br>+33 782809054</h1>
						
					</div>
				</div>	
			</div>

		</footer>  
		</div>
		<div class='row'>
			<div class="credits w-100">
					© Tous Mes Droits - Privacy Policy
			</div>
		</div>
	</div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss" scoped>
.Footer{
	margin-top:200px;
}
footer{
	position:relative;
	margin-top:100px;
}
footer:before{
	content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 390px;
    background: $color3;
    -webkit-transform: skewY(-6deg);
    transform: skewY(-2deg);
    z-index: 0;
    left: 0;
    margin-top: -40px;
}
.footer_center_text{
	color:$color6;
    margin:0px;	
    padding: 100px 0px;
    line-height: 55px;
}
.credits{
    color: $color5;
    height: 150px;
    background: $color6;
    text-align: right;
    line-height: 150px;
    padding-right: 50px;
    padding-top: 20px;
}
.space{
	height:100px;
}
</style>