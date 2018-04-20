export function startParallax(selector){
	if(process.server)return;
	return;//disabled
	if(window.innerWidth<992) return;
	if(window.innerWidth>1400) return;
	try{
		new Rellax(selector)
	}catch(err){
		console.warn('Parallax Fail',err);
	}
}