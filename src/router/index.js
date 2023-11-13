import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // path: '/',
  // name: 'home',
  // component: () => import('../App.vue'),
  // redirect: { path:'/mainHome'},
  // children:[
  {
    path: '/',
    name: 'mainHome',
    component: () => import('../views/mainHome'),
  },
  {
    path: '/mainResume',
    name: 'mainResume',
    component: () => import('../views/mainResume'),
  },
  {
    path: '/mainForm',
    name: 'mainForm',
    component: () => import('../views/mainForm'),
  },
  {
    path: '/mainPortfolio',
    name: 'mainPortfolio',
    component: () => import('../views/mainPortfolio'),
  },
]

export default new VueRouter({
  // mode: 'hash',
  mode: 'history',
  routes,
})
