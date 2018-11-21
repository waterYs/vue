<template>
  <div class="page-home">
    <my-header></my-header>
    <my-aside></my-aside>
  </div>
</template>
<script>
  import MyHeader from '../../components/layouts/el-header/index'
  import MyAside from '../../components/layouts/el-aside/index'
  export default {
    name:'home',
    components:{
      MyHeader,
      MyAside
    }
  }
</script>
