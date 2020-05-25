import Vue from 'vue'
import App from './App.vue'
import './assets/scss/utils.scss'
import store from './store'
import router from './router'

import { MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdField)

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
