import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//申明状态
const state={
	count:0
}

//给action注册处理函数,当这个函数触发时,将状态提交到mutations
const actions={
	increment:({commit})=>commit('increment'),
	decrement:({commit})=>commit('decrement')
}

//更新状态mutations
const mutations={
	increment(state){
		state.count=state.count+1;
	},
	decrement(state){
		state.count=state.count-1;
	}
}

//获取状态信息
const getters={

}

//注册store对象
var store=new Vuex.Store({
	state,
	actions,
	mutations,
	getters
})

//导出store对象
export default store
