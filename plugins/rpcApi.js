import {
	get
} from '@/plugins/api';

if (typeof window !== 'undefined') {
	window.test = () => {
		sync().then(console.log);
	}
}

export async function sync() {
	return await get('/tests/rpcTest');
}
