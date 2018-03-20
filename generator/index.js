import * as sander from 'sander';
import path from 'path';
const TEMPLATE_PAGE = 'index.vue';
const TEMPLATE_PROPS_TARGET = 'let props = {};';
const assetPath = (p) => path.join(process.cwd(), 'assets', p);
const pagePath = (p) => path.join(process.cwd(), 'pages', p);
const readFile = (p) => (sander.readFileSync(p)).toString('utf-8')
const writePageFile = (p, c) => {
	var fp = path.join(process.cwd(), 'pages', p, 'index.vue');
	console.log('writing', p);
	return sander.writeFileSync(fp, c)
};

function getRoutes() {
	let res = readFile(assetPath('routes.json'));
	try {
		res = JSON.parse(res);
	} catch (err) {
		console.log('Invalid JSON')
		process.exit(0);
	}

	if (res.nodes.filter(i => !i.title).length > 0) {
		console.log('title is required')
		process.exit(0);
	}
	if (res.nodes.filter(i => i.path === '' || i.path === '/').length > 0) {
		console.log('Path should be like /my-article-title')
		process.exit(0);
	}
	return res;
}

function compileTemplate(template,route){
	let code = `
	let props = ${JSON.stringify(route)};
	`
	return template.replace(TEMPLATE_PROPS_TARGET,code);
}

function writeRoutes() {
	let template = readFile(pagePath(TEMPLATE_PAGE));
	let res = getRoutes();
	res.nodes.forEach((i, k) => {
		if(i.ssr === false) return;
		if(!i.path){
			throw new Error('Path required for route '+JSON.stringify(i));
		}
		writePageFile(i.path, compileTemplate(template,i));
	});
}

writeRoutes();

console.log('end')
process.exit(0);