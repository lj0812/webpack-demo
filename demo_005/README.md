# webpack核心概念-plugin

- [webpack核心概念-plugin](#webpack核心概念-plugin)
  - [作用](#作用)
  - [用法](#用法)
    - [本质](#本质)
    - [基本原则](#基本原则)
    - [使用插件的方法](#使用插件的方法)
      - [配置的方式](#配置的方式)
      - [Node API](#node-api)

## 作用

plugin用于bundle文件的优化，资源管理和环境变量注入，作用于整个构建过程

## 用法

### 本质

webpack plugin 是一个具有 `apply` 方法的JavaScript对象，`apply` 方法会被webpack compiler调用，并且compiler对象可在整个编译生命周期访问

``` js
// compiler hook 的 tap 方法的第一个参数，应该是驼峰式命名的插件名称
// 因此建议使用一个常量以便可以再所有hook中复用
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('webpack 构建过程开始！');
    });
  }
}
```

### 基本原则

由于插件可以携带参数/选项，你必须在 webpack 配置中，向 plugins 属性传入 new 实例。

### 使用插件的方法

#### 配置的方式

``` js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 访问内置的插件
const path = require('path');

module.exports = {
  entry: './path/to/your/entry/file.js',
  output: {
    filename: 'my-first-webpack.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [ // 接受一个由多个plugin实例组成的数组
    new webpack.ProgressPlugin(), // 自定义编译过程中进度报告方式的方法，比如一些编译进度的文字展示
    new HtmlWebpackPlugin({template: './src/index.html'}) // 将编译好的bundle文件插入到HTML文件中，一般放在body底部
  ]
};
```

注意：*可在命令行运行 `npm run d5` 查看相关示例*

#### Node API

``` js
const webpack = require('webpack'); //访问 webpack 运行时(runtime)
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);

new webpack.ProgressPlugin().apply(compiler); // 调用 apply 方法

compiler.run(function(err, stats) {
  // ...
});
```
