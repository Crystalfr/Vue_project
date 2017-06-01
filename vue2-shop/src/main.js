// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//  引入组件
import Layout from './components/Layout'
//  引入路由
import router from './router'
//  引入API请求的库
import axios from 'axios'
import VueAxios from 'vue-axios'
//  使用Axios
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
