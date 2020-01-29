# webpack核心概念-manifest

- [webpack核心概念-manifest](#webpack核心概念-manifest)
  - [前言](#前言)
  - [概念](#概念)
    - [runtime](#runtime)
    - [manifest](#manifest)
  - [实践](#实践)
    - [提取manifest](#提取manifest)

## 前言

在使用 webpack 构建的典型应用程序或站点中，有三种主要的代码类型：

1. 你或你的团队编写的源码。
2. 你的源码会依赖的任何第三方的 `library` 或 `"vendor"` 代码。
3. webpack 的 `runtime` 和 `manifest`，管理所有模块的交互。

## 概念

### runtime

`runtime`以及伴随的 `manifest` 数据，主要是指：在浏览器运行过程中，webpack 用来连接模块化应用程序所需的所有代码。它包含：在模块交互时，连接模块所需的加载和解析逻辑。包括：已经加载到浏览器中的连接模块逻辑，以及尚未加载模块的延迟加载逻辑。

> The runtime, along with the manifest data, is basically all the code webpack needs to connect your modularized application while it's running in the browser. It contains the loading and resolving logic needed to connect your modules as they interact. This includes connecting modules that have already been loaded into the browser as well as logic to lazy-load the ones that haven't.

### manifest

在你的应用程序中，形如 index.html 文件、一些 bundle 和各种资源，都必须以某种方式加载和链接到应用程序，一旦被加载到浏览器中。在经过打包、压缩、为延迟加载而拆分为细小的 chunk 这些 webpack 优化 之后，你精心安排的 /src 目录的文件结构都已经不再存在。所以 webpack 如何管理所有所需模块之间的交互呢？这就是 manifest 数据用途的由来……

当 compiler 开始执行、解析和映射应用程序时，它会保留所有模块的详细要点。这个数据集合称为 "manifest"，当完成打包并发送到浏览器时，runtime 会通过 manifest 来解析和加载模块。无论你选择哪种 模块语法，那些 import 或 require 语句现在都已经转换为 __webpack_require__ 方法，此方法指向模块标识符(module identifier)。通过使用 manifest 中的数据，runtime 将能够检索这些标识符，找出每个标识符背后对应的模块。

## 实践

### 提取manifest

通过 `WebpackManifestPlugin` 插件，可以将 `manifest` 数据提取为一个容易使用的 `json` 文件。

``` js
// webpack.config.js

const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin');

const pathResolve = rpath => {
  return path.resolve(__dirname, rpath)
}

module.exports = {
  mode: 'none',
  entry: pathResolve('index.js'),
  output: {
    filename: '[name]_[hash:8].js',
    path: pathResolve('../../dist/demo_concept/demo_008')
  },
  plugins: [
    new ManifestPlugin()
  ]
};
```

在根目录下运行: `webpack --config demo_concept/demo_008/webpack.config.js`

在`dist/demo_concept/demo_008`目录下生成`main_598cbf5e.js`和`manifest.json`文件

``` json
// manifest.json
{
  "main.js": "main_598cbf5e.js"
}
```
