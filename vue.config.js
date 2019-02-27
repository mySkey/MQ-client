'use strict'
const path = require('path')
module.exports = {
  // 部署应用时的基本 URL
  baseUrl: './',

  //不生成原图
  productionSourceMap: false,

  // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'test',

  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',

  // 默认在生成的静态资源文件名中包含hash以控制缓存
  filenameHashing: true,

  lintOnSave: false,

  devServer: {
    host: '0.0.0.0',
    port: '8080',
    overlay: {  //lint报错
      warnings: false, //浏览器中打印错误
      errors: false   //有lint错误时，直接在编译时错误
    }
  },

  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'less',
  //     patterns: [
  //       path.resolve(__dirname, './src/common/css/style.less'),
  //     ]
  //   }
  // },
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vue-router': 'VueRouter'
    }
  }
}
