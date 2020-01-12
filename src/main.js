import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'
import './../node_modules/bulma/css/bulma.css';
import axios from 'axios';

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8080/warmup/';
axios.defaults.timeout = 180000;
router.beforeEach((to, from, next) => {
  console.log(store);
  if (to.matched.some(record => record.meta.requiresLogin) && !store.getters.isUserLogin) {
      // You can use store variable here to access globalError or commit mutation 
      next("/login")
  } else {
      next()
  }
})
//Vue instance
new Vue({
  router,
  store,
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