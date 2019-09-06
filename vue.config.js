//使用别名
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      alias: {
        //@代表src
        'assets': '@/assets',
        'common': '@/common',
        'componens': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer: {

    proxy: {
      //配置跨域
      '/api': {
        target: "http://127.0.0.1:7001",
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
