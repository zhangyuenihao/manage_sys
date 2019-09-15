<template>
  <el-header
    style="text-align: right; font-size: 12px;"
    background-color="#314057"
  >
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
        <el-dropdown-item @click.native="goLogin()">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span :nickname="user.nickname">{{ user.nickname }}</span>
  </el-header>
</template>

<script>
export default {
  name: "headerBar",
  props: {
    user: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    goLogin() {
      this.$router.push("/login");
    }
  },
  computed: {},
  created() {},
  mounted() {},
  components: {}
};
</script>

<style lang="scss" scoped>
  .el-header{
    border-bottom: 1px solid #314057;
  }
</style>
