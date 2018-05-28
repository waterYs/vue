// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'  //引入router文件中的index.js
import store from './store/store'  //引入store.js


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,//配置路由
  store,//配置store
  components: { App },
  template: '<App/>'
})
