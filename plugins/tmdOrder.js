import {isServer} from '@/plugins/browser';
import localforage from '@/plugins/localforage';
import shortid from 'shortid';

export function generateNumber(){
	return shortid.generate()
}

export async function fetchOrderMessages(orderNumber){
  return [];
  /*
  if(isServer()) return [];
  let cache = await loadFromCache() || {};
  return cache.messages || [];
  */
}

export async function saveToCache(item) {
  if (!isServer()) {
    let last = await loadFromCache() || {};
    for(var x in item){
      last[x] = item[x];
    }
    await localforage.setItem('tmdOrder', last);
  }
}

export async function loadFromCache() {
  if (!isServer()) {
    return await localforage.getItem('tmdOrder');
  }
  return null;
}

