import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // about独享的事件
    beforeEnter: (to, from ,next) => {
      console.log('about独享事件')
      // 进行权限校验，然后设定重定向
      let isLogin = true
      if (isLogin||to.path==='/login'){
        next()
      }else {
        next({
          path: '/login'
        })
      }
    },
    meta: {requiresAuth: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/list',
    component: ()=>import('../views/list'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log('-------')
    console.log(savedPosition)
    if(to.path==='/list' && savedPosition){
      return {x: 0, y: savedPosition.y/2,
        behavior: 'smooth'}
    }
  }
})

router.beforeEach((to, from, next)=>{
  console.log('beforeEach')
  console.log(to)
  console.log(from)
  // next() // 进行跳转

  // next(false) // 不进行跳转：此时路由如果改变，会发现页面还是不进行改变的，始终是原来的样式

  // 进行权限校验，然后设定重定向
  let isLogin = false
  // if (isLogin||to.path==='/login'){
  //   next()
  // }else {
  //   next({
  //     path: '/login'
  //   })
  // }

  // 根据meta进行校验
  if(to.meta.requiresAuth && !isLogin){
    next({path:'/login'})
  }else{
    next()
  }
})

router.afterEach((to, from)=>{
  console.log('afterEach')
  console.log(to)
  console.log(from)
})

// router.onError((err)=>{
//   console.log('onError')
//   console.log(err)
// })

export default router
