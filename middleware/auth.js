export default async function({
	store,
	error,
	client
}) {

	if(!client) return;

	await store.dispatch('auth/update');

	if (!store.state.auth.isLogged) {
		error({
			message: 'You are not connected',
			statusCode: 401
		})
	}

}