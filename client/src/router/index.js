import Vue from 'vue'
import VueRouter from 'vue-router'

import LandingPage from '../views/LandingPage.vue'
import Form from '../views/Form.vue'
import Dashboard from '../views/Dashboard.vue'
import FormSong from '../views/FormSong.vue'

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
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/add-playlist',
    name: 'add-playlist',
    component: FormSong
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
