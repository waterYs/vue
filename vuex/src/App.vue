<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <!-- <Counter/>引入Counter组件
    <Echarts/> --><!--2018/6/3引入Echarts组件-->
    <router-link :to="{name:'counter'}" class='couter'>couter</router-link>
    <router-link :to="{name:'echarts'}" class='echarts'>echarts</router-link>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import StoreDemo from './components/StoreDemo'
// import Counter from './components/Counter'
// import Echarts from '@/components/Echarts'

export default {
  // name: 'App',
  // components: {
  //   // HelloWorld,
  //   StoreDemo,
  //   Counter,
  //   Echarts
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.couter,.echarts{
  width: 100%;
  height: 50px;
  background-color: #ddd;
  margin-bottom: 5px;
  line-height: 50px;
  display:block;
  /* float: left; */
}
</style>
