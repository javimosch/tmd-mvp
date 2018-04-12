export default async function({
	store,
	error,
	client,
	ssr,
	server,isServer,isClient
}) {
	if(process.server) return;
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