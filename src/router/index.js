import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'empty-layout' },
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'empty-layout' },
    component: () => import('../views/Register')
  },
  {
    path: '/',
    name: 'Home',
    meta: { layout: 'main-layout' },
    component: Home
  },
  {
    path: '/categories',
    name: 'category',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Categories')
  },
  {
    path: '/history',
    name: 'history',
    meta: { layout: 'main-layout' },
    component: () => import('../views/History')
  },
  {
    path: '/planning',
    name: 'planing',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Planning')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Profile')
  },
  {
    path: '/record',
    name: 'record',
    meta: { layout: 'main-layout' },
    component: () => import('../views/Record'),
  },
  {
    path: '/detail/:id',
    name: 'recordDetail',
    meta: { layout: 'main-layout' },
    component: () => import('../views/RecordDetail')
  },
  {
    path: '*',
    name: 'notfound',
    meta: { layout: 'empty-layout' },
    component: () => import('../views/NotFound')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URl,
  routes
})

export default router
