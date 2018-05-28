import Vue from 'vue'
import Router from 'vue-router'
import Counter from '../components/Counter'  //引入Counter组件

Vue.use(Router);

//定义路由对象
var router=new Router({
	routes:[
		{
			path:'/',
			name:'Counter',
			component:Counter
		}
	]
})
//导出路由
export default router