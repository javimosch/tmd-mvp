import axios from '@/plugins/axios';

export async function apiIsAlive(){
	return await axios.get('/');
}


export async function post(url, data) {
	return new Promise((resolve, reject) => {
		axios.post(url, data, {
			withCredentials: true
		}).then(response => {
			resolve(response.data);
		}).catch(err => {
			console.warn(err.response.status, err.response.data);
			reject({
				statusCode: err.response.status,
				status: err.response.status,
				data: err.response.data
			});
		});
	});
}

export async function get(url) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			withCredentials: true
		}).then(response => {
			resolve(response.data);
		}).catch(err => {
			console.warn(err.response.status, err.response.data);
			reject({
				statusCode: err.response.status,
				status: err.response.status,
				data: err.response.data
			});
		});
	});
}