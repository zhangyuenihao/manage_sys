<template>

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

</template>

<script>

    import sideBar from "../common/sideBar";
    import headerBar from "../common/headerBar";
    export default {
        name: 'guide',
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



        },
        computed: {},
        created() {

        },
        mounted() {


        },
        components: {headerBar, sideBar}
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
