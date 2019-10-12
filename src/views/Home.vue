<template>
  <div class="warp">
   首页

  </div>
</template>

<script>

export default {
  name: "Home",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {

    };
  },
  methods: {

  },
  computed: {},
  created() {
    this.getUser();
    this.getAlluser();
  },
  mounted() {
  },
  components: {  }
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
    border-right: none;

    .el-submenu {
      text-color: $text-color;
    }
  }
}
</style>
