const { defineConfig } = require('@vue/cli-service')

const api = process.env.VUE_APP_BASE_API

module.exports = defineConfig({
  transpileDependencies: true,
  // 改变斜杠，为了打包后可以直接用html启动（1.需要router的mode:'history' 2.需要把阿里的icon加上http）
  // publicPath: './',
  devServer: {
    // 可以局域网连接
    host: '0.0.0.0',
    port: 80,
    open: true,
    proxy: {
      [api]: {
        target: 'http://localhost:8080',
        //  // 是否开启跨域
        changeOrigin: true,
        // 代理websocket
        // ws: true,
        // secure: true,
        pathRewrite: {
          ['^' + api]: '',
        },
      },
    },
  },
})
