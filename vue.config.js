const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 改变斜杠，为了打包后可以直接用html启动（1.需要router的mode:'history' 2.需要把阿里的icon加上http）
  // publicPath:'./'
})
