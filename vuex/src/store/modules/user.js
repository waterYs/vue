//导入常量文件types
import types from './../type'  
const state={
	count:5
}
//定义getters
var getters={
	count(state){
		return state.count
	}
}
const actions={
	increment({commit,state}){
	//此处提交的事件与下方的mutations中的types.INCREMENT对应,与原来的commit('increment')的原理相同,只是把类型名称换成了常量
		commit(types.INCREMENT)
	},
	decrement({commit,state}){
		if(state.count>10){			
			commit(types.DECREMENT)
		}
	}
}
const mutations={
	[types.INCREMENT](state){
		state.count++
	},
	[types.DECREMENT](state){
		state.count--
	}
}
//mutations原来的写法如下
const mutations1={
	increment(state){
		state.count++
	}
}
export default{
	state,
	getters,
	actions,
	mutations
}