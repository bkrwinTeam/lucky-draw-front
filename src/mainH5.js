// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './AppH5'
import router from './router'
import store from './store'
import httpSer from './api/httpSer'

Vue.config.productionTip = false;
Vue.prototype.httpSer = httpSer;
Vue.use(Vuex)
Vue.mixin({
  data () {
    return {
      service: '', // 服务
      router: '/', // 路由路径
      imgSrc: '' // 图片路径
    }
  },
  methods: {
      newroot () {
          return  this.$route
      },
      navigatePageTo (url) {
          this.$router.push(url)
      },
      reLaunchPageTo (url) {
          this.$router.replace(url)
      }
  },
  created () {

  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
