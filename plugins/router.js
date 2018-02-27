

export function handle401(router, next){
	return (err)=>{
		if(err.status && err.status === 401){
			console.log('handle401');
			router.push('/login');
		}else{
			next(err);
		}
	}
}