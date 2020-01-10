import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8080/warmup/';

//Vue instance
new Vue({
  router,
  render: h => h(App)
}).$mount('#app') 
 
/*
// New Vue instance
new Vue({
  // Vue instance options here
  el: '#appId', // 
  data: someDataObject,
  template: 'App'
})  */