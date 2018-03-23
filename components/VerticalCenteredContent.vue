<template>
	<div class="col content w-100 h-100">
				<div>
				<slot></slot>
				</div>
			</div>
</template>
<script>
export default{
	name:"VerticalCenteredContent"
};
</script>
<style lang="scss" scoped>
.content{
	display:table;
}
.content > div{
    vertical-align: middle;
    display: table-cell;
    text-align: center;
}
.ccontent >div > img{
    display: block;
    height: auto;
    width: 100%;
}
</style>