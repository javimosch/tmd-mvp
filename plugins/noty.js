var Noty;
if (typeof window !== 'undefined') {
	//import Noty from 'noty';	
	Noty = require('noty');
}


export function NotyConfirm(text) {
	if (typeof window === 'undefined') return;

	return new Promise((resolve, reject) => {
		const n = new Noty({
			text: text,
			buttons: [
				Noty.button('Yes', 'btn btn-danger', function() {
					resolve(true);
					n.close();
				}, {
					id: 'button1',
					'data-status': 'ok'
				}),

				Noty.button('No', 'btn btn-default', function() {
					resolve(false);
					n.close();
				})
			]
		}).show();
	});
}