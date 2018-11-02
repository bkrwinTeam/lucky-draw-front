import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/index.vue'
import luckyDraw from '../pages/luckyDraw/index'
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
  }]
})
