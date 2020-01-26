# webpack配置-入口和上下文

- [webpack配置-入口和上下文](#webpack配置-入口和上下文)
  - [入口](#入口)
  - [上下文](#上下文)

## 入口

[参考](../../demo_concept/demo_001/README.md)

## 上下文

entry 对象是用于 webpack 查找启动并构建 bundle。其上下文是入口文件所处的目录的绝对路径的字符串。

``` js
module.exports = {
  //...
  context: path.resolve(__dirname, 'app') // 默认使用当前目录，但是推荐在配置中传递一个值。这使得你的配置独立于 CWD(current working directory - 当前执行路径)。
};
```
