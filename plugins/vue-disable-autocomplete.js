import Vue from 'vue'

//import DisableAutocomplete from 'vue-disable-autocomplete';
const disableAutocomplete = {
    install(Vue) {
        Vue.mixin({
            mounted() {
                this.disableAutoComplete();
            },

            methods: {
                disableAutoComplete() {
                    let elements = document.querySelectorAll('[autocomplete="off"]');

                    if (!elements) {
                        return;
                    }

                    elements.forEach(element => {
                        element.setAttribute('readonly', 'readonly');
                        element.style.backgroundColor = 'inherit';

                        window.addEventListener('load', () => {
                            setTimeout(() => {
                                element.removeAttribute('readonly');
                            }, 500);
                        });
                    });
                }
            }
        });
    }
};



Vue.use(disableAutocomplete);