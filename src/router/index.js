import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Product from '../views/Product.vue'
import ShoppingCard from '../views/ShoppingCard.vue'
import Success from '../views/Success.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/product',
    name: 'productShop',
    component: Product
  },
  {
    path: '/card',
    name: 'shoppingcard',
    component: ShoppingCard
  },
  {
    path: '/success',
    name: 'successBuy',
    component: Success
  }
]

const router = new VueRouter({
  routes
})

export default router
