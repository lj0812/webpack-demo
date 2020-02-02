var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

const pathResolve = rpath => {
  return path.resolve(__dirname, rpath)
}

module.exports = {
  mode: 'none',
  entry: pathResolve('index.js'),
  output: {
    filename: "bundle.js",
    path: pathResolve('../../dist/demo_loader/demo_style-loader')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: pathResolve('index.html')
    })
  ]
}
