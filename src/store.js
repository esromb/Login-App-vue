import Vue from "vue";
import Vuex from "vuex";

import User from './modules/user';
import VueRouter from "vue-router";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      user: User
  }
});