import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const CookBook = () => import('../views/Cookbook.vue')
const Main = () => import('../views/Main.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/cookbook', component: CookBook },
      // { path: '/', redirect: '/cookbook' }
      { path: '/', component: Main }
    ]
  })
}
