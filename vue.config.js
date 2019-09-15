//使用别名
module.exports = {
  productionSourceMap: true,
  configureWebpack: {

    resolve: {
      extensions: [],
      alias: {
        //@代表src
        assets: "@/assets",
        common: "@/common",
        componens: "@/components",
        network: "@/network",
        views: "@/views"
      }
    }
  }
};
