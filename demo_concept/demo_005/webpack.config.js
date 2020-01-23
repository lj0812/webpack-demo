const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const webpack = require('webpack'); // 访问内置的插件
const path = require('path');

// 因为实际运行时不一定在此目录下，所以需要处理一下文件路径，以免报文件找不到的bug
const resolve = p => path.resolve(__dirname, p)

module.exports = {
  mode: 'none',
  entry: resolve('index.js'),
  output: {
    filename: 'bundle.js',
    path: resolve('dist')
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
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: resolve('index.html')})
  ]
};
