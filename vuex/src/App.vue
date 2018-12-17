<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <!-- <Counter/>引入Counter组件
    <Echarts/> --><!--2018/6/3引入Echarts组件-->
    <router-link :to="{name:'counter'}" class='couter'>couter</router-link>
    <router-link :to="{name:'echarts'}" class='echarts'>echarts</router-link>
    <router-view/>
    <button @click='increment'>增加</button>
    <button @click='decrement'>减少</button>
    <p>{{count}}</p>
    <button @click='incrementAsync'>延时增加</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import StoreDemo from './components/StoreDemo'
// import Counter from './components/Counter'
// import Echarts from '@/components/Echarts'
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  // components: {
  //   // HelloWorld,
  //   StoreDemo,
  //   Counter,
  //   Echarts
  // }
  data(){
    return{
      // count:this.$store.state
    }
  },
  computed:mapGetters(['count']),
  methods:mapActions(['increment','decrement','incrementAsync'])
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
