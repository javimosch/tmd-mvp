import {get, post, patch, remove as removeHandler} from '@/plugins/api';

export async function fetchAll() {
	return await get('/api/databases');
}

export async function fetch(id) {
	return await get('/api/databases/'+id);
}

export async function save(data) {
	if(!data) throw new Error('data expected');
	if(data._id){
		return await patch(`/api/databases/${data._id}`,data);
	}else{
		return await post('/api/databases',data);
	}
}

export async function remove(id) {
	return await post('/api/databases/'+id+'/remove');
}