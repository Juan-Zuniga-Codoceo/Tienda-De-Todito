import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import RopaHombre from '@/views/RopaHombre.vue'
import RopaMujer from '@/views/RopaMujer.vue'
import Electronica from '@/views/electronica.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/CheckOut.vue'
import Confirmation from '@/views/Confirmation.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vestuarioHombre',
    name: 'RopaHombre',
    component: RopaHombre
  },
  {
    path: '/vestuarioMujer',
    name: 'RopaMujer',
    component: RopaMujer
  },
  {
    path: '/electronica',
    name: 'electronica',
    component: Electronica
  },
  {
    path: '/cart',
    name: 'Carrito',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'checkout',
    component:Checkout
  },
  {
    path:'*',
    name:'NotFound',
    component:NotFound,
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: Confirmation,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
