# webpack配置-devServe

- [webpack配置-devServe](#webpack配置-devserve)
  - [描述](#描述)
    - [webpack-dev-serve是什么](#webpack-dev-serve是什么)
    - [基本使用](#基本使用)
  - [配置项](#配置项)

## 描述

`webpack-dev-server` 能够用于快速开发应用程序，此配置影响 webpack-dev-server(简写为：dev-server) 的行为

### webpack-dev-serve是什么

开发过程中为了增加开发效率，常常实现自动编译，`webpack` 提供几种可选方式，帮助你在代码发生变化后自动编译代码：

1. webpack watch mode(webpack 观察模式)
2. webpack-dev-server
3. webpack-dev-middleware

`webpack-dev-server` 为你提供了一个简单的 `web server`，并且具有 `live reloading`(实时重新加载) 功能。

注意：*webpack-dev-server 在编译之后不会写入到任何输出文件。而是将 bundle 文件保留在内存中，然后将它们 serve 到 server 中，就好像它们是挂载在 server 根路径上的真实文件一样。*

### 基本使用

``` js
var path = require('path');

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 告诉服务器从哪个目录中提供内容
    compress: true, // 启用 gzip 压缩
    port: 9000 // 监听请求的端口号
  }
};

```

## 配置项
