import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    },
    {
      path: '/addRole',
      name: 'Role',
      component: () => import('../views/CreateRole.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/addSkill',
      name: 'Skill',
      component: () => import('../views/CreateSkill.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/createTeamMember',
      name: 'CreateTeamMember',
      component: () => import('../views/CreateTeamMember.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/createESA',
      name: 'CreateESA',
      component: () => import('../views/ESA.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/createEBS',
      name: 'CreateEBS',
      component: () => import('../views/EBS.vue'),
      meta: { requiresLogin: true }
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/Auth/Login.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../components/Auth/SignUp.vue')
    }
  ]
})
