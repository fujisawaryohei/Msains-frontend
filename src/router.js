import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import ThreadBoard from './views/ThreadBoard.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/threadboard',
      name: 'threadboard',
      component: ThreadBoard
    }
  ]
})
