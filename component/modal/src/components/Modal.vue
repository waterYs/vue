<template>
	<div>
		<div class="modal">
			<!-- <div class="modalBg"></div> -->
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						头部
					</div>
					<div class="modal-body">
						<!-- <slot>子组件slot 无值</slot> -->
						<slot name='body'>子组件主体内容</slot>
					</div>
					<div class="modal-footer">
						<button class="btn btnConfirm" @click='confirm'>确定</button>
						<button class="btn btnCancel" @click='cancel'>取消</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal-backup"></div>
	</div>
	
</template>
<style lang='less' scoped>
	.modal{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 1001;
		.modal-dialog{
			position: absolute;
			width: 300px;
			left: 50%;
			top: 50%;
			transform: translate(-50%,-50%);
			background-color: #fff;
			.modal-content{
				/* border: 1px solid #ddd; */
				/* background-color: gray; */
				padding:0 15px;
				.modal-header{
					height: 30px;
					line-height: 30px;
					text-align: center;
					/* background-color: gray; */
					border-bottom: 1px solid #ddd;
				}
				.modal-body{
					padding: 15px 0;
				}
				.modal-footer{
					border-top: 1px solid #ddd;
					padding: 15px 0;
					display: flex;
					flex-direction:row-reverse;
					.btn{
						width: 100px;
						height:30px;
						/* line-height:30px;
						text-align: center; */
						margin-right: 10px;
						&:nth-child(1){
							margin-right: 0;
						}
					}
				}
			}
		}
	}
	.modal-backup{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color:gray;
		opacity: .5;
		z-index:1000;
	}
</style>
<script>
	// import Detail from './Detail'
	export default{
		
		components:{
			// Detail
		},
		data(){

			return{
				props:['show'],
				// this.show=show;
			}
		},
		methods:{
			confirm(){
				this.show=true;
				this.$emit('getModalShow',this.show);
			},
			cancel(){
				this.show=false;
				this.$emit('getModalShow',this.show);
			}
		}
	}
</script>