import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/Index'
import Login from '@/page/Login'
import Register from '@/page/Register'
import Notfound from '@/page/Notfound'
import InputPassword from '@/page/InputPassword'
import ForgetPassword from '@/page/ForgetPassword'
import RetrievePassword from '@/page/RetrievePassword'
import RetrieveSuccess from '@/page/RetrieveSuccess'
import Home from '@/page/Home'
import Lists from '@/page/Lists'
import Mine from '@/page/Mine'
import ListDetail from '@/page/ListDetail'
import ApplyDelay from '@/page/ApplyDelay'
import Repayment from '@/page/Repayment'
import Pay from '@/page/Pay';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/pay'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: '/index/Lists',
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'lists',
          name: 'Lists',
          component: Lists
        },
        {
          path: 'mine',
          name: 'Mine',
          component: Mine
        }
      ]
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
    },
    {
      path: '/listdetail',
      name: 'ListDetail',
      component: ListDetail
    },
    {
      path: '/applydelay',
      name: 'ApplyDelay',
      component: ApplyDelay
    },
    {
      path: '/repayment',
      name: 'Repayment',
      component: Repayment
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    }
  ]
})
