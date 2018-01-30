import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const CookBook = () => import('../views/CookBook.vue')
const Main = () => import('../views/Main.vue')
const Product = () => import('../views/Product.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/cookbook', component: CookBook, name: 'cookbook' },
      { path: '/product/:id', component: Product, name: 'product' },
      { path: '/', component: Main, name: 'index' }
    ]
  })
}
