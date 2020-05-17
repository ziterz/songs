import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from '../views/LandingPage.vue'
import Form from '../views/Form.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/register',
    name: 'register',
    component: Form
  },
  {
    path: '/signin',
    name: 'signin',
    component: Form
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
