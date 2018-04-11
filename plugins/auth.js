import {call} from '@/plugins/rpcApi';

export async function login(email, password) {
	let res =  await call('loginWithEmailAndPassword', {
		email,
		password
	});
	if(!res){
		throw new Error('Invalid credentials')
	}
	window.localStorage.setItem('token', res.token);
	return res.user;
}

export async function logout() {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('isLogged', 0);
	}
}

export async function setIsLoggedInCache(val) {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('isLogged', !!val?'1':'0');
	}
}

export function getIsLoggedFromCache(val) {
	if (typeof window === 'undefined') {
		return false;
	}
	return (window.localStorage.getItem('isLogged') || '').toString() === '1';
}