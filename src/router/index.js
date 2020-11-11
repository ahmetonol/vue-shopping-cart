import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '@/views/List'
import Detail from '@/views/Detail'
import ShoppingCart from '@/views/ShoppingCart'
import NotFound from '@/views/NotFound'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'products'
  },
  {
    path: '/products',
    name: 'products',
    component: List
  },
  {
    path: '/product-detail/:id',
    name: 'detail',
    component: Detail,
    props: true
  },
  {
    path: '/shopping-cart',
    name: 'cart',
    component: ShoppingCart
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
