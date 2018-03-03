import {
	patch,
	get
} from '@/plugins/api';
import safeEval from 'safe-eval';
import moment from 'moment';

export async function fetch() {
	return await get('/api/nuxt/config');
}

export async function update(data) {
	return await patch('/api/nuxt/config', data);
}

export function evaluateMappingColumnData(data, product) {
	let rta = '';
	try {
		rta = safeEval(`
						(function(p){
							${data}
						})(this.product);
					`, {
			product,
			moment
		});
	} catch (err) {
		//rta = err.toString();
		throw err;
	}
	return rta;
}