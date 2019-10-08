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
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }

};
