<template>
  <el-container>
    <el-aside width="200px" class="my-aside">
      <sub-menu></sub-menu>
    </el-aside>
    <my-main></my-main>
  </el-container>
</template>
<script>
  import MyMain from '../el-main/index'
  import SubMenu from './components/SubMenu'
  export default {
    components:{
      MyMain,
      SubMenu
    }
  }
</script>
<style lang="less" scoped>
  .my-aside{
    background-color:@background-color;
  }
</style>
