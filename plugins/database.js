import {get, post} from '@/plugins/api';

export async function fetchAll() {
	return await get('/api/databases');
}

export async function fetch(id) {
	return await get('/api/databases/'+id);
}

export async function save() {
	return await post('/api/databases');
}