import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
    	path:'/helloWorld',
    	name:'helloWorld',
    	component:HelloWorld
    },
    {
    	path:'/',
    	name:'index',
    	component:Index
    }
  ]
})
