const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 改变斜杠，为了打包后可以直接用html启动（1.需要router的mode:'history' 2.需要把阿里的icon加上http）
  // publicPath:'./'
  devServer: {
    // 可以局域网连接
    // host: '0.0.0.0',
    // open: true,
    proxy: {
    
      '/admin': {
        target: 'https://empty-cup-1311629255.cos.ap-nanjing.myqcloud.com/emptycup',
      },
    },
  },

})
