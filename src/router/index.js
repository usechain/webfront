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
import Announcement from '@/components/Announcement'
import Exchange from '@/components/Exchange'
import News from '@/components/News'
import Node from '@/components/Node'
import Cuse from '@/components/Cuse'
import ManageMoney from '@/components/ManageMoney'
import GuessRule from '@/components/GuessRule'

import HelpCenter from '@/components/WalletApp/HelpCenter/HelpCenter'
import CreateWallet from '@/components/WalletApp/HelpCenter/CreateWallet'
import Upgrade from '@/components/WalletApp/HelpCenter/Upgrade'
import AnonyAddress from '@/components/WalletApp/HelpCenter/AnonyAddress'
import MainAddress from '@/components/WalletApp/HelpCenter/MainAddress'
import CreditRating from '@/components/WalletApp/HelpCenter/CreditRating'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homeinit',
      component: Home
    },
    {
      path: '/announcement',
      name: 'Announcement',
      component: Announcement
    },
    {
      path: '/cuse',
      name: 'Cuse',
      component: Cuse
    },
    {
      path: '/guess_rule',
      name: 'GuessRule',
      component: GuessRule
    },
    {
      path: '/manage_money',
      name: 'ManageMoney',
      component: ManageMoney
    },
    {
      path: '/exchange',
      name: 'Exchange',
      component: Exchange
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/node',
      name: 'Node',
      component: Node
    },
    {
      path: '/pust',
      name: 'PUST',
      component: PUST
    },
    {
      path: '/buy_pust/:pustqr?',
      name: 'PustBuy',
      component: PustBuy
    },
    {
      path: '/usechain_pust/:pustqr?',
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
      path: '/helpcenter',
      name: 'HelpCenter',
      component: HelpCenter
    },
    {
      path: '/createwallet',
      name: 'CreateWallet',
      component: CreateWallet
    },
    {
      path: '/upgrade',
      name: 'Upgrade',
      component: Upgrade
    },
    {
      path: '/anonyaddress',
      name: 'AnonyAddress',
      component: AnonyAddress
    },
    {
      path: '/mainaddress',
      name: 'MainAddress',
      component: MainAddress
    },
    {
      path: '/creditrating',
      name: 'CreditRating',
      component: CreditRating
    },
    {
      path:'*',
      redirect:'/notfound',
      component:NotFound
    }
  ],
  mode:'history'
})
