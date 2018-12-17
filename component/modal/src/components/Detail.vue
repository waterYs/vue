<template>
	<div class="detail">
		<h1>查看详情</h1>
		<button class="btnDetail" @click='submit'>
			查看详情
		</button>
		<Modal :show='show' @getModalShow='setModalShow' v-show='show'>
			<p>父组件 与slot 无关</p>
			<p slot=''>父组件 有 slot 属性,但是没有值</p>
			<p slot='body'>父组件 有 slot 属性 ,并且 slot='body' </p>
		</Modal>
	</div>
</template>
<style lang='less' scoped>
	.detail{
		width: 100%;
		/* height: 50px;
		line-height: 50px; */
		height:100%;
		display:flex;
		/* flex-wrap: wrap; */
		flex-flow: column;
		align-items: center;
		justify-content: center;
		/* background-color: gray;	 */
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		.btnDetail{
			height: 50px;
			width: 200px;
			
			/* justify-content: center; */
			
		}
	}
</style>
<script>
	import Modal from './Modal'
	export default{
		components:{
			Modal
		},
		data(){
			return{
				show:false
			}
		},
		methods:{
			submit(){
				this.show=true;				
			},
			setModalShow(val){
				console.log(val);
				this.show=val;
			}
		}
	}
</script>