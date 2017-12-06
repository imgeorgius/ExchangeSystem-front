import Vue from 'vue'
import Router from 'vue-router'

import Full from '@/containers/Full'
import AdminFull from '@/containers/AdminFull'

import Exchange from '@/views/Exchange'
import AskQuestion from '@/views/AskQuestion'
import About from '@/views/About'
import Transactions from '@/views/Transactions'
import Users from '@/views/Users'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/exchange',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'exchange',
          name: 'Exchange',
          component: Exchange
        },
        {
          path: 'questions',
          name: 'Questions',
          component: AskQuestion
        },
        {
          path: 'about',
          name: 'About',
          component: About
        }
      ]
    },
    {
      path: '/admin',
      redirect: '/admin/transactions',
      name: 'Admin',
      component: AdminFull,
      children: [
        {
          path: 'transactions',
          name: 'Trasnactions',
          component: Transactions
        },
        {
          path: 'users',
          name: 'Users',
          component: Users
        }
      ]
    }
  ]
})
