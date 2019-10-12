<template>
  <div class="warp">
    <el-container style="height:100%; border: 1px solid #eee">
      <el-header style="background:#314057 ">xxx后台管理系统</el-header>
      <el-container>
        <side-bar :menus="dataList.menus"></side-bar>
        <el-container style="width: 100%">
          <el-header>
            <header-bar :user="dataList.user" ></header-bar>
          </el-header>
          <el-main>
            <router-link　to="/about">你好</router-link>
            <router-view :key="$route.params.id"/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import sideBar from "./common/sideBar";
  import headerBar from "./common/headerBar";

  export default {
    name: "Main",
    data() {
      const item = {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      };
      return {
        dataList: {},
        userList:{}
      };
    },
    methods: {
      async getUser() {
        const data = await this.axios.get("user/info");
        this.dataList = data;
        console.log(data)
      },
      async getAlluser(){
        const data = await this.axios.get("user/userList");
        this.userList = data;
        console.log(data)
      }
    },
    computed: {},
    created() {
      this.getUser();
      this.getAlluser();
      console.log(this.$route.path)
    },
    mounted() {
    },
    components: { headerBar, sideBar}
  };
</script>

<style lang="scss" scoped>
  $bg-color: #314057;
  $text-color: #909399;

  .warp {
    height: 100%;
  }

  .el-header {
    color: $text-color;
    line-height: 60px;
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
      border-right: none;s

      .el-submenu {
        text-color: $text-color;
      }
    }
  }
</style>
