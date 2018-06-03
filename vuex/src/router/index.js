import Vue from 'vue'
import Router from 'vue-router'
import Counter from '../components/Counter'  //引入Counter组件
import Echarts from '@/components/Echarts'

Vue.use(Router);

//定义路由对象
var router=new Router({
	routes:[
		{
			path:'/',
			name:'counter',
			component:Counter
		},
		{
			path:'/echarts',
			name:'echarts',
			component:Echarts
		}
	]
})
//导出路由
export default router