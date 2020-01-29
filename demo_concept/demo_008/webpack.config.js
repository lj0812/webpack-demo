const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin');

const pathResolve = rpath => {
  return path.resolve(__dirname, rpath)
}

module.exports = {
  entry: pathResolve('index.js'),
  output: {
    filename: '[name]_[hash:8].js',
    path: pathResolve('../../dist/demo_concept/demo_008')
  },
  plugins: [
    new ManifestPlugin()
  ]
};
