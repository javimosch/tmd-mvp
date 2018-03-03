import {post} from '@/plugins/api';

export async function remoteSelectFetch(reqData) {
	return await post('/api/nuxt/products-by-ref-or-zipcode',reqData);
}
