import Vue from "vue";
import Vuex from "vuex";

import User from './modules/user';
import Role from './modules/role';
import Skill from './modules/skill';
import TeamMember from './modules/member';
import ESA from './modules/esa'
import EBS from './modules/ebs'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      user: User,
      role: Role,
      skill: Skill,
      member: TeamMember,
      esa: ESA,
      ebs: EBS
  }
});