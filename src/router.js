import Vue from 'vue'
import Router from 'vue-router'
import Splash from './views/Splash/Splash.vue'
import Login from './views/Login/Login.vue'
import Landing from './views/Landing/Landing.vue'
import Payment from './views/Landing/Payment.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Splash',
      component: Splash
    },
      {
          path: '/Login',
          name: 'Login',
          component: Login
      },
      {
          path: '/Landing',
          name: 'Landing',
          component: Landing
      },
      {
          path: '/Payment',
          name: 'Payment',
          component: Payment
      },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
    mode:'history'
})
