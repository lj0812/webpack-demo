# webpack核心概念-output

- [webpack核心概念-output](#webpack核心概念-output)
  - [作用](#作用)
  - [默认值](#默认值)
    - [多个入口时](#多个入口时)
    - [占位符](#占位符)

## 作用

控制 webpack 如何向硬盘写入编译文件

## 默认值

``` js
module.exports = {
  output: {
    filename: './dist/main.js'
  }
}
```

### 多个入口时

注意：*即使存在多个entry，也只能指定一个output配置*

如果配置了多个单独的入口，应该使用 **占位符** 来确保每个文件具有唯一的名称

``` js
module.exports = {
  entry: {
    app: './path/to/your/app/file.js',
    admin: './path/to/your/admin/file.js'
  },
  output: {
    filename: '[name].js', // 这里的[name]就是占位符,
    path: __dirname + '/dist'
  }
}
```

### 占位符


