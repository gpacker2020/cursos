
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIA
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikdlcm1hbm8gIiwiZW1haWwiOiJnZXJtYW5vQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDM1NjQwMTEsImV4cCI6MTYwMzgyMzIxMX0.9FLco3lcd1LYGshWocIAg4f-xyQhB8EEb3UpKOWfylc'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')