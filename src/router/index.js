import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const CookBook = () => import('../views/CookBook.vue')
const CookBookM = () => import('../views/CookBook.m.vue')
const Main = () => import('../views/m/Main.vue')
const MainM = () => import('../views/m/Main.vue')
const ProductM = () => import('../views/m/product/Product.vue')
const Product = () => import('../views/pc/product/Product.vue')

export function createRouter (platFormIsMobile) {
  if (platFormIsMobile) {
    return new Router({
      mode: 'history',
      fallback: false,
      scrollBehavior: () => ({ y: 0 }),
      routes: [
      { path: '/cookbook', component: CookBookM, name: 'cookbook' },
      { path: '/product/:id', component: ProductM, name: 'product' },
      { path: '/', component: MainM, name: 'index' }
      ]
    });
  }
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
