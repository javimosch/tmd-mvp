import {isServer} from '@/plugins/browser';
import localforage from '@/plugins/localforage';

export async function fetchAll(node){
  if(isServer()){
    return [];
  }
  let items = await localforage.getItem('orders');
  return items;
}
