<template>
  <el-aside width="200px">
    <el-menu
      :default-active="this.$router.path"
      @open="handleOpen"
      @close="handleClose"
      text-color="#909399"
      background-color="#314057"
      router
    >
      <el-menu-item :key="item.id" v-for="item of menus" @click="handleSelect" :index="item.path" >
        {{ item.name }}
      </el-menu-item>
      <!--<el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="file">
        <i class="el-icon-document"></i>
        <span slot="title">文档</span>
      </el-menu-item>
      <el-menu-item index="guide">
        <i class="el-icon-s-promotion"></i>
        <span slot="title">引导页</span>
      </el-menu-item>
      <el-submenu index="permission">
        <template slot="title">
          <i class="el-icon-lock"></i>
          <span>权限测试页</span>
        </template>
        <el-menu-item index="permissions">页面权限</el-menu-item>
        <el-menu-item index="per-directive">指令权限</el-menu-item>
        <el-menu-item index="per-role">角色权限</el-menu-item>
      </el-submenu>
      <el-menu-item index="icon">
        <i class="el-icon-info"></i>
        <span slot="title">图标</span>
      </el-menu-item>
      <el-submenu index="assembly">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>组件</span>
        </template>
        <el-menu-item index="6-1">页面权限</el-menu-item>
        <el-menu-item index="6-2">指令权限</el-menu-item>
        <el-menu-item index="6-3">角色权限</el-menu-item>
      </el-submenu>
      <el-submenu index="chart">
        <template slot="title">
          <i class="el-icon-s-data"></i>
          <span>图表</span>
        </template>
        <el-menu-item index="7-1">页面权限</el-menu-item>
        <el-menu-item index="7-2">指令权限</el-menu-item>
        <el-menu-item index="7-3">角色权限</el-menu-item>
      </el-submenu>
      <el-submenu index="routing">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>路由嵌套</span>
        </template>
        <el-menu-item index="8-1">页面权限</el-menu-item>
        <el-menu-item index="8-2">指令权限</el-menu-item>
        <el-menu-item index="8-3">角色权限</el-menu-item>
      </el-submenu>-->
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: "sideBar",
  props: {
    menus: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
      handleSelect(key,keyPath){
          console.log(key, keyPath);
      }
  },
  computed: {},
  created() {},
  watch: {},
  components: {}
};
</script>

<style lang="scss" scoped>
  .el-menu-item{
    width: 200px;
  }
</style>
