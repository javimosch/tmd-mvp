<template>
	<h1></h1>
</template>
<script>
export default {
	mounted () {
		localStorage.setItem('access_token', this.$route.query.access_token);
		console.log(this.$route.query);
		this.$router.push('/login');
	}
}
</script>