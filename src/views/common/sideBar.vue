<template>
  <el-aside width="200px">
    <el-menu
      :default-active="this.$route.path"
      @open="handleOpen"
      @close="handleClose"
      text-color="#fff"
      background-color="#314057"
      router
    >
      <el-menu-item :key="item.id" v-for="item of menus" @click="handleSelect" :index="'/main'+item.path">
        {{ item.name }}
      </el-menu-item>
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
    return {

    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
      handleSelect(key,keyPath){
          console.log(key,keyPath)
      }
  },
  computed: {

  },
  created() {

    console.log(this.$route.path)
  },
  watch: {},
  components: {}
};
</script>

<style lang="scss" scoped>
  .el-menu-item{
    width: 200px;
  }
</style>
