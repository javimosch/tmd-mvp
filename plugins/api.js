import axios from '@/plugins/axios';

export async function apiIsAlive() {
	return await axios.get('/');
}


export async function post(url, data) {
	return new Promise((resolve, reject) => {
		axios.post(url, data, {
			withCredentials: true
		}).then(thenHandler(resolve)).catch(catchHandler(reject));
	});
}

export async function get(url) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			withCredentials: true
		}).then(thenHandler(resolve)).catch(catchHandler(reject));
	});
}

export async function patch(url, data) {
	return new Promise((resolve, reject) => {
		axios.patch(url, data, {
			withCredentials: true
		}).then(thenHandler(resolve)).catch(catchHandler(reject));
	});
}

export async function remove(url, data) {
	return new Promise((resolve, reject) => {
		axios.delete(url, data, {
			withCredentials: true
		}).then(thenHandler(resolve)).catch(catchHandler(reject));
	});
}


function catchHandler(reject) {
	return err => {
		console.warn(err.response.status, err.response.data);
		reject({
			statusCode: err.response.status,
			status: err.response.status,
			data: err.response.data
		});
	};
}

function thenHandler(resolve) {
	return response => {
		resolve(response.data);
	}
}