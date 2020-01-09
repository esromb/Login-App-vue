import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';

Vue.config.productionTip = false

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