import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/login', name: 'login', component: () => import(/*webpackChunkName 'login' */ './views/Login.vue') },
    { path: '/list', name: 'list', component: () => import(/*webpackChunkName 'list' */ './views/Friends.vue') },
    { path: '/chat/:toId', name: 'chat', component: () => import(/*webpackChunkName 'chat' */ './views/Chat.vue') },
    { path: '/', redirect: '/list' },
  ],
})
