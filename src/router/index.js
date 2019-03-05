import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Notfound from '@/page/Notfound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/notfound',
      name: 'Notfound',
      component: Notfound
    },
    {
      path: '*',
      redirect: '/notfound'
    }
  ]
})
