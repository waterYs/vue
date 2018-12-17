<template>
	<div></div>
</template>
<script>
	import Vue from 'vue'
	import Vuex from 'vuex'

	Vue.use(Vuex);

	const store=new Vuex.Store({
		state:{
			count:0,
		},
		mutations:{
			increment:function(state){
				state.count++;
			}
		}
	})

	store.commit('increment');
	console.log('store.state.count:',store.state.count);

	export default{
		name:'StoreDemo'
	}
</script>