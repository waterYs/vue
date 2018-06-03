<template>
	<div class="index">
		<h1>主页面</h1>
		<div class="home">
			<ul>
				<li><router-link :to="{name:'home'}">home</router-link></li><!--具名路由 :to-->
				<li><router-link to='/helloWorld'>hello world</router-link></li>
			</ul>
		</div>
		<!-- <router-view></router-view> --><!--无效-->
	</div>
</template>
<style>
	*{
		margin: 0;
		padding: 0;
	}
	ul,li{
		list-style: none;
	}
	.hmoe{

	}
	.home li{
		float: left;
		width: 50%;
	}
</style>
<script>
	export default{
		name:'index'
	}
</script>