import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./pages/home/Home.vue')
    }, {
      path: '/city',
      name: 'city',
      component: () => import('./pages/city/City.vue')
    }, {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./pages/detail/Detail.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
