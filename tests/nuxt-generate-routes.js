var test = require('tape-catch');

test('Retrieve routes from routes.json', function(t) {
	const sander = require('sander');
	const path = require('path');
	var r = sander.readFileSync(path.join(process.cwd(), 'assets', 'routes.json'));
	t.true(r instanceof Buffer,'Result is Buffer')
	r = r.toString('utf-8');
	try{
		r = JSON.parse(r);
	}catch(err){
		t.fail('Unable to parse json');
		return t.end(err);
	}
	t.true(!!r, "json file exists");
	t.true(r.list!==undefined, "list property exists");
	t.true(r.list.length!==undefined, "list is array");
	var routes = r.list.map(r=>r.path);
	t.true(routes.filter(r=>!r).length===0,'Route exists');
	t.true(routes.length>0,'At least one route');
	t.end();
});