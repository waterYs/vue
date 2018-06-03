// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'  //引入router文件中的index.js
import store from './store/store'  //引入store.js
// import echarts from 'echarts' //引入echarts 图表js


Vue.config.productionTip = false
// Vue.prototype.$echarts=echarts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//配置路由
  store,//配置store
  // echarts,
  components: { App },
  template: '<App/>'
})
