const path = require('path')

const pathResolve = rpath => {
  return path.resolve(__dirname, rpath)
}

module.exports = {
  mode: 'development',
  entry: {
    app: pathResolve('app.js'),
    admin: pathResolve('admin.js'),
  },
  output: {
    filename: '[name].js',
    path: pathResolve('../dist/demo_002')
  }
}
