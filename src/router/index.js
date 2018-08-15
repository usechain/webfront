import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Token from '@/components/Token'
import ClauseDetail from '@/components/ClauseDetail'
import NotFound from '@/components/NotFound'
import Contact from '@/components/Contact'
import Wechat from '@/components/Wechat'
import PUST from '@/components/PUST'
import PustBuy from '@/components/PustBuy'
import PustUsechain from '@/components/PustUsechain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homeinit',
      component: Home
    },
    {
      path: '/pust',
      name: 'PUST',
      component: PUST
    },
    {
      path: '/buy_pust',
      name: 'PustBuy',
      component: PustBuy
    },
    {
      path: '/usechain_pust',
      name: 'PustUsechain',
      component: PustUsechain
    },
    {
      path: '/hrefto:nav',
      name: 'Home',
      component: Home
    },
    {
      path: '/login:id',
      name: 'Login',
      component: Login
    },
    {
      path: '/token',
      name: 'Token',
      component: Token
    },
    {
      path: '/clausedetail:tab',
      name: 'ClauseDetail',
      component: ClauseDetail
    },
    {
      path: '/notfound',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/wechat',
      name: 'Wechat',
      component: Wechat
    },
    {
      path:'*',
      redirect:'/',
    }
  ],
  mode:'history'
})
