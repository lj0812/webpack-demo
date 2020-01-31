# webpack配置-performance

- [webpack配置-performance](#webpack配置-performance)
  - [描述](#描述)
  - [配置值](#配置值)

## 描述

控制 webpack 如何通知「资源(asset)和入口起点超过指定文件限制」,配置如何展示性能提示。例如，如果一个资源超过 250kb，webpack 会对此输出一个警告来通知你。

## 配置值

``` js

module.exports = {
  //...
  performance: {
    // 打开/关闭提示
    hints: false, // 关闭提示
    hints: 'warning', // 默认值，找到提示将抛出警告
    hints: 'error', // 找到提示将抛出错误，建议生产环境构建时使用此值，
    // 根据入口起点的最大体积，控制 webpack 何时生成性能提示。默认值是：250000 (bytes)。
    maxEntrypointSize: 400000,
    // 控制 webpack 根据单个资源体积何时生成性能提示。默认值是：250000 (bytes)。
    maxAssetSize: 100000,
    // 此属性告诉webpack哪些文件需进行性能提示。默认函数如下：
    assetFilter: function (assetFilename) {
      return !(/\.map$/.test(assetFilename));
    },
    // 自定义函数
    assetFilter: function(assetFilename) {
      return assetFilename.endsWith('.js'); // 将只给出 .js 文件的性能提示
    }
  }
};

```
