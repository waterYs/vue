import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);
Vue.use(ElementUI);
const router=new VueRouter({
  routes
})
export default{
  router
}
