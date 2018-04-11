export default async function({
	store,
	error,
	client
}) {
	if(client!==undefined && client===false) return;
	try{
		await store.dispatch('auth/update');
	}catch(err){}
	if (!store.state.auth.isLogged) {
		error({
			message: 'You are not connected',
			statusCode: 401
		})
	}

}