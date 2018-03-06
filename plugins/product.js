import { post, get } from '@/plugins/api';

export async function remoteSelectFetch(reqData) {
  return await post('/api/nuxt/products-by-ref-or-zipcode', reqData);
}

export async function countExportQuery(data) {
  return await post('/api/nuxt/test-export-query', data);
}

export async function fetchMappedProducts(mappingId) {
  return await get(`/api/products/mapping?id=${mappingId}`);
}

export async function runMappingScript(data) {
  return await post(`/api/export-mappings/export/${data.mappingId}`, {
    isSimulation: data.isSimulation != undefined ? data.isSimulation : true
  });
}


export function createMySqlProductExportExampleScript() {
  return `

/*
METHODS: 
	exec (Example: await exec('SQL')) Will execute database commands
    trace (Example: trace(variable) Will log to output
    moment (https://momentjs.com/)
    (Is possible to add any library from https://www.npmjs.com/ later on)
VARIABLES: docs (mapped products)
IMPORTANT: You should map the columns before trying this.
*/

//biens INSERTS ====================


const MAIN_KEY = 'bi_reference'
const COLUMNS = ['bi_reference']
let values = "";
docs.forEach((doc, index)=>{
	let isLast = index == docs.length-1
	values+= "(#{COLUMNS.map(k=>doc[k]).join(',')}) #{isLast?'':','}";
});
await exec("INSERT INTO biens (#{COLUMNS.join(',')}) VALUES #{values} ON DUPLICATE KEY UPDATE bi_reference = #{docs.map(d=>'('+d.bi_reference+')').join(',')+';'}");
//IMPORTANT NOTE: bi_reference should be UNIQUE in mysql in order avoid duplications        



//PHOTOS EXPORT ====================


/*
Importan notice: A mapped column named photos should exist with the follow value
==== START Column photos
//Here I will put all the photos records ready to export (id, agency, url and order)
var a = p.description.photo.map((d,i)=>({
pb_bien: p._id, //product id
pb_agence:p.commercialisation.agency_id[0], //first agency tied to product
pb_photo: d.url, //photo url
pb_ordre: i+1 //default order
}))
return JSON.stringify(a);
===== END
*/

let photos = JSON.parse(docs[0].photos);
if(photos.length===0) return; //no photos

var sql = "INSERT INTO photosbiens (pb_bien, pb_agence, pb_photo, pb_ordre)";
sql+=' VALUES '+photos.map(p=>"(#{Object.keys(p).map(k=>sqlVal(p[k])).join(',')})").join(',')+''
sql+=';'

//The follow will prevent duplication (currently, it has sintaxis errors)
//sql+=' ON DUPLICATE KEY UPDATE '
//sql+=Object.keys(photos[0])
//  .filter(k=>k!=='pb_photo')
//  .map(k=>"#{k} = #{getValues(k, photos)}").join(', ')+';'

await exec(sql);

function getValues(k,docs){
  return 'VALUES ('+docs.map(d=>d[k]).join(',')+')';
}
function sqlVal(v){
	return typeof v === 'string' ? "'#{v}'" : v;
}



`.replace(new RegExp("#{", 'g'), "${").replace(new RegExp('"', 'g'), "`");
}
