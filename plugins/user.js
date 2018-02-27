import {get} from '@/plugins/api';

export async function count() {
	return await get('/api/v2/users/count');
}

export async function me() {
	return await get('/api/users/me');
}