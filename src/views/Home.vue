<template>
  <div class=warp>
    <el-container style="height:100%; border: 1px solid #eee">
      <el-header>xxx后台管理系统</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="this.$route.path" @open="handleOpen"
                   @close="handleClose" text-color="#909399" background-color="#314057"
                   router>
            <el-menu-item index="about">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-document"></i>
              <span slot="title">文档</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-s-promotion"></i>
              <span slot="title">引导页</span>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-lock"></i>
                <span>权限测试页</span>
              </template>
              <el-menu-item index="4-1">页面权限</el-menu-item>
              <el-menu-item index="4-2">指令权限</el-menu-item>
              <el-menu-item index="4-3">角色权限</el-menu-item>
            </el-submenu>
            <el-menu-item index="5">
              <i class="el-icon-info"></i>
              <span slot="title">图标</span>
            </el-menu-item>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>组件</span>
              </template>
              <el-menu-item index="6-1">页面权限</el-menu-item>
              <el-menu-item index="6-2">指令权限</el-menu-item>
              <el-menu-item index="6-3">角色权限</el-menu-item>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>图表</span>
              </template>
              <el-menu-item index="7-1">页面权限</el-menu-item>
              <el-menu-item index="7-2">指令权限</el-menu-item>
              <el-menu-item index="7-3">角色权限</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>路由嵌套</span>
              </template>
              <el-menu-item index="8-1">页面权限</el-menu-item>
              <el-menu-item index="8-2">指令权限</el-menu-item>
              <el-menu-item index="8-3">角色权限</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px" background-color="#314057">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
                <el-dropdown-item @click.native="goLogin()">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-header>

          <el-main>
            <el-table :data="tableData">
              <el-table-column prop="date" label="日期" width="140">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址">
              </el-table-column>
            </el-table>
          </el-main>
        </el-container>
      </el-container>

    </el-container>
  </div>
</template>

<script>

 export default {
    name: 'Home',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
      }

    },
    methods: {
      goLogin() {
        this.$router.push('/login')
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleSelect(key,keyPath){

      }

    },
    computed: {},
    created() {

    },
    mounted() {


    },
    components: {}
  }
</script>

<style lang="scss" scoped>
  $bg-color: #314057;
  $text-color: #909399;

  .warp {
    height: 100%;
  }

  .el-header {
    background-color: $bg-color;
    color: $text-color;
    line-height: 60px;
    border-bottom: 3px solid #233249;
  }

  .el-submenu__title {
    color: $text-color !important;
  }

  .el-aside {
    background-color: $bg-color;
    color: $text-color;

    .el-menu {
      background-color: $bg-color;
      width: 100%;
      border-right: none;

      .el-submenu {
        text-color: $text-color;
      }

    }

  }

</style>
