import Vue from "vue";
import Vuex from "vuex";

import User from './modules/user';
import Role from './modules/role';
import Skill from './modules/skill';


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      user: User,
      role: Role,
      skill: Skill
  }
});