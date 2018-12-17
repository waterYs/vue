import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
import users from './modules/user'

//导出store对象
export default new Vuex.Store({
	modules:{
		users
	}
})