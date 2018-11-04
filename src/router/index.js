import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/index.vue'
import luckyDraw from '../pages/luckyDraw/index'
import countDown from '../pages/countDown/index'
import luckyDrawResult from '../pages/luckyDrawResult/index'
import luckyDrawAddress from '../pages/luckyDrawAddress/index'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    alias: '/pages/home/main'
  }, {
    path: '/luckyDraw',
    name: 'luckyDraw',
    component: luckyDraw,
    alias: '/pages/luckyDraw/main'
  }, {
    path: '/countDown',
    name: 'countDown',
    component: countDown,
    alias: '/pages/countDown/main'
  }, {
    path: '/luckyDrawResult',
    name: 'luckyDrawResult',
    component: luckyDrawResult,
    alias: '/pages/luckyDrawResult/main'
  }, {
    path: '/luckyDrawAddress',
    name: 'luckyDrawAddress',
    component: luckyDrawAddress,
    alias: '/pages/luckyDrawAddress/main'
  }]
})
