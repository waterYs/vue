<template>
	<div id="demo">
		<h1>vuex状态管理</h1>
		count次数为:{{$store.state.count}}
		<button @click='increment'>+1</button>
		<button @click='decrement'>-1</button>
	</div>
</template>
<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
		name:'Couter',
		computed:mapGetters([

		]),
		methods:mapActions([
			'increment',
			'decrement'
		])
	}
</script>