import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import ClauseDetail from '@/components/ClauseDetail'
import NotFound from '@/components/NotFound'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homeinit',
      component: Home
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
      path:'*',
      redirect:'/',
    }
  ],
  mode:'history'
})
