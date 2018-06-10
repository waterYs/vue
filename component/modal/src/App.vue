<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <Detail/>
    <!-- <Modal/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Detail from '@/components/Detail'
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Detail,
    Modal
  }
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
</style>
