# webpack配置-watch，watchOptions

- [webpack配置-watch，watchOptions](#webpack配置-watchwatchoptions)
  - [watch](#watch)
  - [watchOptions](#watchoptions)
    - [参考链接](#参考链接)

## watch

启用 Watch 模式。这意味着在初始构建之后，webpack 将继续监听任何已解析文件的更改。

``` js
module.exports = {
  //...
  watch: true
};
```

注意：*`webpack-dev-server` 和 `webpack-dev-middleware` 里 Watch 模式默认开启。*

## watchOptions

一组用来定制 Watch 模式的选项：

``` js
module.exports = {
  //...
  watchOptions: {
    // 当第一个文件更改，会在重新构建前增加延迟。
    // aggregateTimeout 选项允许 webpack 将这段时间内进行的任何其他更改都聚合到一次重新构建里。
    // 以毫秒为单位：
    aggregateTimeout: 300,
    // 排除一些巨大的文件夹
    // 也可以使用多种 anymatch 模式（见下方参考链接）：
    ignored: /node_modules/,
    // 通过传递 true 开启 polling(轮询)
    // 或者指定毫秒为单位进行轮询。
    poll: 1000
  }
};
```

### 参考链接

- [anymatch模式](https://github.com/micromatch/anymatch)
