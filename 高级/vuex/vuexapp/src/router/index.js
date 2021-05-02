import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StateView from '../views/StateView'
import GetterView from '../views/GetterView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/state',
    name: 'State',
    component: StateView
  },
  {
    path: '/getter',
    name: 'Getter',
    component: GetterView
  },
  {
    path: '/action',
    component: ()=>import('../views/ActionsView')
  },
  {
    path:'/buycar',
    component: ()=>import('../views/BuyCar')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
