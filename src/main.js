import Vue from 'vue'
import App from './App.vue'
import './assets/scss/utils.scss'
import store from './store'
import router from './router'

import VueMq from 'vue-mq'

import { MdField } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(MdField)
Vue.use(VueMq, {
  breakpoints: {
    mobile: 520,
    tablet: 720,
    desktop: Infinity
  },
  defaultBreakpoint: 'desktop'
})

new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
