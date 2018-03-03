export const TYPES = ['string', 'select', 'subform'];

export function validationFailBehaviour(key) {
	if (this.options.validate) {
		let label = key.charAt(0).toUpperCase() + key.substring(1)
		this.options.validate(label);
		if (this.$refs[key] && this.$refs[key].length > 0) {
			this.$refs[key][0].focus();
		}
	}
}

export function validationFailKey(next) {
	let rta = '';
	let self = this;
	Object.keys(this.model).forEach(key => {
		if (self.options.fields[key] && self.options.fields[key].required === true) {
			if (rta==''&&(self.model[key] === null || self.model[key] === '')) {
				if (next) {
					next(key);
				}
				rta = key;
			}
		}
	});
	return rta;
}

export function validationFail(next) {
	return validationFailKey.apply(this, [next]) != '';
}

export async function save() {
	let opts = this.options.save;
	let payload = this.normalizePayload(this.model);
	if (this.validationFail(this.validationFailBehaviour)) {
		return;
	}
	if (typeof this.options.save === 'function') {
		await this.options.save(payload);
	} else {
		if (typeof opts.handler !== 'undefined') {
			await this.options.save.handler(payload);
		} else {
			if (typeof opts.dispatch !== 'undefined') {
				if (typeof opts.dispatch !== 'string') {
					throw new Error('dispatch should be string');
				}
				let doc = await this.$store.dispatch(opts.dispatch, payload);
				let next = opts.next || opts.then;
				if (typeof next !== 'undefined') {
					next(doc);
				}
			}
		}
	}
	this.$emit('onSave');
}

export async function cancel() {
	let self = this;
	let opts = this.options.cancel;
	let actions = {
		clear: () => {
			let empty = (() => {
				let p = {};
				self.fields.forEach(f => {
					if (f.type === 'subform') {
						p[f.$name] = (() => {
							let sp = {};
							let sf = f.options.fields;
							Object.keys(sf).forEach(k => {
								sp[k] = sf[k].default || '';
							});
							return sp;
						})()
					} else {
						p[f.$name] = f.default || '';
					}
				});
				p._id = null;
				return p;
			})()
			Object.assign(self.model, empty);
		}
	};
	if (typeof this.options.cancel === 'function') {
		this.options.cancel(actions);
	} else {
		if (typeof opts.handler !== 'undefined') {
			this.options.cancel.handler(actions);
		}
	}
	this.$emit('onCancel');
}

export function normalizeTypeName(t) {
	if (typeof t === 'function') {
		return t.name.toLowerCase();
	}
	if (t === 'text') return 'string';
	return t;
}

export function getFields() {
	var self = this;
	let arr = [];
	let fields = this.options.fields;
	Object.keys(fields).forEach(k => {
		arr.push(
			Object.assign(
				Object.assign({}, fields[k]), {
					type: normalizeTypeName(fields[k].type),
					$name: k,
					label: k.charAt(0).toUpperCase() + k.substring(1)
				})
		);
	});
	arr.forEach(f => {
		if (!TYPES.includes(f.type)) {
			throw new Error('Type ' + f.type + ' unknown.');
		} else {

		}
		if (f.type === 'subform') {
			self.bindProperty(f.$name, {});
		}
		if (f.type === 'string') {
			self.bindProperty(f.$name, '');
		}
		if (f.type === 'select') {
			if (!f.in) throw new Error('select [in] required');
			if (f.default) {
				f.in.unshift({
					text: f.defaultText||'',
					value: ''
				});
			}
			self.bindProperty(f.$name, '');
		}
	})
	return arr;
}

export function bindProperty(name, value) {
	if (typeof this.$data.model[name] == 'undefined') {
		this.$set(this.$data.model, name, value);
	}
}