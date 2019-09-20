import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faSearch, faPlus)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

import paystack from 'vue-paystack';

Vue.config.productionTip = false

new Vue({
  router,
    paystack,
  render: h => h(App)
}).$mount('#app')
