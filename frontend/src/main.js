
import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msg'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false  

//TEMPORARIA
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikdlcm1hbm8gIiwiZW1haWwiOiJnZXJtYW5vQGdtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE2MDQyMzAzMzMsImV4cCI6MTYwNDQ4OTUzM30.5wODd70fk1aCkX6lRbxZSUiSrTP3jheSbTWoLn6iFyY'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')