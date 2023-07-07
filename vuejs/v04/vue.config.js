const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false // .map파일을 생성하지않는다.
  // outputDir: '..//dist' // 생략하면 기본 dist 폴더
})
