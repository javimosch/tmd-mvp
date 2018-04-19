export function startParallax(selector){
	if(process.server)return;
	if(window.innerWidth<992) return;
	if(window.innerWidth>1400) return;
	try{
		new Rellax(selector)
	}catch(err){
		console.warn('Parallax Fail',err);
	}
}