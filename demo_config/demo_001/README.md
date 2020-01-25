# webpack配置-配置类型

- [webpack配置-配置类型](#webpack配置-配置类型)
  - [导出为一个函数](#导出为一个函数)
  - [导出一个 Promise](#导出一个-promise)
  - [导出多个配置对象](#导出多个配置对象)

## 导出为一个函数

``` js
// 环境对象(env: environment)作为第一个参数
// 一个选项 map 对象（argv）作为第二个参数,这个对象描述了传递给 webpack 的选项，并且具有 output-filename 和 optimize-minimize 等 key

module.exports = function(env, argv) {
  return {
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? 'source-maps' : 'eval',
      plugins: [
        new TerserPlugin({
          terserOptions: {
            compress: argv['optimize-minimize'] // 只有传入 -p 或 --optimize-minimize
          }
        })
     ]
  };
};
```

## 导出一个 Promise

webpack 将运行由配置文件导出的函数，并且等待 Promise 返回。便于需要异步地加载所需的配置变量。

``` js
module.exports = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        entry: './app.js',
        /* ... */
      });
    }, 5000);
  });
};
```

## 导出多个配置对象

作为导出一个配置对象/配置函数的替代，当运行 webpack 时，所有的配置对象都会构建，如果只想构建一个对象，使用`--config-name`指定配置名称

``` js
module.exports = [{
  output: {
    filename: './dist-amd.js',
    libraryTarget: 'amd'
  },
  name: 'amd', // 使用的配置名称 --config-name amd
  entry: './app.js',
  mode: 'production',
}, {
  output: {
    filename: './dist-commonjs.js',
    libraryTarget: 'commonjs'
  },
  name: 'commonjs', // 使用的配置名称 --config-name commonjs
  entry: './app.js',
  mode: 'production',
}];
```
