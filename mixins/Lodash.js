import _ from 'lodash';
export default {
    methods: {
        makeNonReactiveCopy(original) {

            if (! _.isObject(original) || _.isArray(original)) {

                return original
            }

            let copy = {}
            let attributes = Object.keys(original)
            attributes.forEach(attribute => {
                let attributeValue = Object.getOwnPropertyDescriptor(original, attribute)
                Object.defineProperty(copy, attribute, {
                    __proto__: null,
                    value: attributeValue.get(),
                    writable: true
                })
            })
            console.log('copy',copy)
            return copy
        },
        backup(original) {
            return this.makeNonReactiveCopy(original)
        }
    }
};