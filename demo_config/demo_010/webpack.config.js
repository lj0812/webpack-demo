const path = require('path')

const pathResolve = rpath => {
  return path.resolve(__dirname, rpath)
}

module.exports = [
  'eval',
  'eval-cheap-source-map',
  'eval-cheap-module-source-map',
  'eval-source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'source-map',
  'inline-source-map',
  'hidden-source-map',
  'nosources-source-map'
].map(devtool => ({
  mode: 'development',
  entry: pathResolve('index.js'),
  output: {
    path: pathResolve('../../dist/demo_config/demo_010'),
    filename: `[name]-${devtool}.js`
  },
  devtool,
  optimization: {
    runtimeChunk: true
  }
}));
