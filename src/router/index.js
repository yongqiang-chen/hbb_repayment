import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Notfound from '@/page/Notfound'
import InputPassword from '@/page/InputPassword'
import ForgetPassword from '@/page/ForgetPassword'
import RetrievePassword from '@/page/RetrievePassword'
import RetrieveSuccess from '@/page/RetrieveSuccess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
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
    },
    {
      path: '/inputpassword',
      name: 'InputPassword',
      component: InputPassword
    },
    {
      path: '/forgetpassword',
      name: 'ForgetPassword',
      component: ForgetPassword
    },
    {
      path: '/retrievepassword',
      name: 'RetrievePassword',
      component: RetrievePassword
    },
    {
      path: '/retrievesuccess',
      name: 'RetrieveSuccess',
      component: RetrieveSuccess
    }
  ]
})
