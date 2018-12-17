<template>
	<div class="echarts">
		<h1>echarts 图表</h1>
		<div id="echart" :style="{width:'100%',height:'600px'}"></div>
	</div>
</template>
<style>
	
</style>
<script>
	import * as echarts from 'echarts/lib/echarts';
	// 引入折线图。
	import 'echarts/lib/chart/line';
	// 引入提示框组件、标题组件、工具箱组件。
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/title';
	import 'echarts/lib/component/toolbox';
	export default{
		name:'Echarts',
		mounted(){//挂在到实例
			this.drawLine();
		},
		methods:{
			drawLine(){
				let myChart=echarts.init(document.getElementById('echart'));//初始化echarts实例
				var option = {
					title: {text: 'Line Chart'},
				    tooltip: {},
				    toolbox: {
				        feature: {
				            dataView: {},
				            saveAsImage: {
				                pixelRatio: 2
				            },
				            restore: {}
				        }
				    },
				    xAxis: {},
				    yAxis: {},
				    series: [{
				        type: 'line',
				        smooth: true,
				        data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
    				}]
				}
				myChart.setOption(option);
			}
		}
	}
</script>