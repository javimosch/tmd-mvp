import {
	post,
	get
} from '@/plugins/api';
import bcrypt from 'bcrypt-nodejs';
//import cookie from 'js-cookie';
import Cookies from 'universal-cookie';

function removeCookie(name) {
	if (typeof window !== 'undefined') {
		const cookie = new Cookies();
		cookie.remove(name, {
			domain: window.location.hostname
		});
		console.log('Removing cookie', name, 'at', location.hostname, typeof cookie.remove);
	}
}

function hashPassword(pwd) {
	return new Promise((resolve, reject) => {
		bcrypt.hash(pwd, process.env.loginSalt, null, function(err, hash) {
			if (err) return reject(err);
			resolve(hash);
		});
	});
}

export async function login(email, password) {
	password = await hashPassword(password);
	return await post('/login', {
		email,
		password
	});
}

export async function logout() {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('isLogged', 0);
	}
}

export async function setIsLoggedInCache(val) {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('isLogged', 1);
	}
}

export async function getIsLoggedFromCache(val) {
	if (typeof window === 'undefined') {
		return false;
	}
	return (window.localStorage.getItem('isLogged') || '').toString() === '1';
}