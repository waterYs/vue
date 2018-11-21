<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-submenu v-for="(item,index) in recordNavList" :index="`${index}`">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item-group v-for="(item1,index1) in item.itemGroup" :key="`${index}${'_'}${index1}`">
          <!--<span slot="title">1</span>-->
          <el-menu-item  :index="`${index}${'_'}${index1}`">{{item1.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  import subMenuRoutes  from '../../../../routes/subMenu/index'
  export default {
    data() {
      return {
        isCollapse: true,
        recordNavList:[
          {
            title:'表单',
            itemGroup:[
              {title:'表单1',route:subMenuRoutes.form1},
              {title:'表单2',route:subMenuRoutes.form2},
              {title:'表单3',route:subMenuRoutes.form3}
            ]
          },
          {
            title:'表格',
            itemGroup:[
              {title:'表格1',route:subMenuRoutes.table1},
              {title:'表格2',route:subMenuRoutes.table2},
              {title:'表格3',route:subMenuRoutes.table3}
            ]
          },
        ]
      };
    },
    created(){
      this.getRecordNavList();
      this.addRecordNav()
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getRecordNavList(){
        this.recordNavList=[];
        this.$http.put('https://www.easy-mock.com/mock/5bf3bfefbc9cc748adb57912/self/recordNavList',{
          name:'a'
        }).then(res=>{
          debugger
          // this.recordNavList=res.data.data;
        }).catch(err=>{
          console.log(err)
        });
      },
      addRecordNav(){
        this.$http.post('http://result.eolinker.com/KMi4MARbdf05ab25427f34184077cd3e4f72e288cde201c?uri=recordNavList',{
          navId:'002',
          navName:'导航1'
        }).then(res=>{
          this.recordNavList=res.data.data;
        }).catch(err=>{
          console.log(err)
        });
      }
    }
  }
</script>
