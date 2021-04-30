import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Me from '../views/Me'
import News from '../views/News'
import Weather from '../views/Weathcer'
import BigNews from '../views/BigNews'
import videoCom from '../components/videoView'
import textCom from '../components/textView'
import imageCom from '../components/imageView'
import About from '../views/About'
import NavView from '../components/NavView'
import AsideView from '../components/AsideView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components: {
      default: Home,
      nav: NavView,
      aside: AsideView
    }
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/me',
    name: 'Me',
    alias:'/self',
    component: Me
  },
  {
    path: '/news/:id',
    name: 'News',
    component: News
  },
  {
    path: '/weather/:city/:area',
    name: 'weather',
    component: Weather
  },
  {
    path: '/bignews',
    component: BigNews,
    children:[
      {
        path: '',
        component: videoCom
      },
      {
        path: 'text',
        component: textCom
      },
      {
        path: 'image',
        component: imageCom
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
