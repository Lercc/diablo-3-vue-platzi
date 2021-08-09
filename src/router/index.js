import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home')
  },
  {
    path: '/region/:region/profile/:battleTag',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '@/views/Profile')
  },
  {
    path: '/region/:region/profile/:battleTag/hero/:heroId',
    name: 'Hero',
    component: () => import(/* webpackChunkName: "hero" */ '@/views/Hero')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  },
  {
    path: '/error',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '@/views/Error')
  },
  {
    path: '*',
    redirect: { name: 'Home '}
  }
]

const router = new VueRouter({
  routes
})

export default router
