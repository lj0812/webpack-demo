# webpack核心概念-entry

- [webpack核心概念-entry](#webpack核心概念-entry)
  - [作用](#作用)
  - [默认值](#默认值)
  - [配置](#配置)
    - [单入口](#单入口)
    - [多入口](#多入口)

## 作用

指示webpack应该使用哪个模块作为构建其内部依赖图的开始

## 默认值

``` js
entry: './src/index.js'
```

## 配置

### 单入口

用法：`entry: String|Array<String>`

``` js
// 简写语法
module.exports = {
  entry: './path/to/your/entry/file.js'
}

// 完整写法
// 这也是为什么entry是一个字符串或字符串数组时，chunk会被命名为main的原因
// 命名时entry对象的每个键会是chunk的名称
module.exports = {
  entry: {
    main: './path/to/your/entry/file.js'
  }
}
```

特别的：*当entry是文件路径的数组时，将创建一个多主入口（multi-main entry）* // TODO

### 多入口

用法：`entry: { [entryChunKName: String]: String|Array<String> }`

``` js
module.exports = {
  entry: {
    app: './path/to/your/app/file.js',
    admin: './path/to/your/admin/file.js'
  }
}
```
