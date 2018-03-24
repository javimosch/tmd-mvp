var localforage = null;
function isServer(){
  return typeof window === 'undefined';
}
if(!isServer()){
	localforage = require('localforage');
}
export default localforage;