var animate = null;


function enable(){
	if(animate) return;
	animate = require('gsap-promise');
}


export async function tweenToFixedNumber(object,key,targetInteger){
	if(process.server) return targetInteger;
	enable();
	var tween = {x:0};
    return await animate(tween, 2.0, { x:targetInteger,onUpdate:()=> {
    	object[key] = tween.x.toFixed(0)
    }})
}