# webpack配置-模块

- [webpack配置-模块](#webpack配置-模块)
  - [描述](#描述)
  - [模块类型](#模块类型)
  - [配置项](#配置项)
    - [module.noParse](#modulenoparse)
    - [module.rules](#modulerules)
      - [规则 Rule](#规则-rule)
        - [Rule 条件](#rule-条件)
        - [Rule 结果](#rule-结果)

## 描述

这些选项决定了如何处理项目中的不同类型的模块。

## 模块类型

[参考：webpack配置-模块](../../demo_concept/demo_006/README.md)

## 配置项

### module.noParse

防止 webpack 解析那些任何与给定正则表达式相匹配的文件。忽略的文件中不应该含有 import, require, define 的调用，或任何其他导入机制。忽略大型的 library 可以提高构建性能。

``` js
// 可选的形式有：RegExp [RegExp] function(resource) string [string]
module.exports = {
  //...
  module: {
    noParse: /jquery|lodash/, // 正则形式
    noParse: (content) => /jquery|lodash/.test(content) // function形式
  }
};
```

### module.rules

创建模块时，匹配请求的`规则`数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用 loader，或者修改解析器(parser)。

可选的形式有：`[Rule]`

#### 规则 Rule

每个规则可以分为三部分 - 条件(condition)，结果(result)和嵌套规则(nested rule)。

##### Rule 条件

条件有两种输入值：

1. resource：请求文件的绝对路径。它已经根据 resolve 规则解析。
2. issuer: 被请求资源(requested the resource)的模块文件的绝对路径。是导入时的位置。

> 例如: 从 app.js 导入 './style.css'，<br/>
> `resource` 是 /path/to/style.css.<br/>
> `issuer` 是 /path/to/app.js。

在规则中：<br/>
属性 `test`, `include`, `exclude` 和 `resource` 对 `resource` 匹配，<br/>
属性 `issuer` 对 `issuer` 匹配。

##### Rule 结果

规则结果只在规则条件匹配时使用，规则有两种输入值：

1. 应用的 loader：应用在 resource 上的 loader 数组。
2. Parser 选项：用于为模块创建解析器的选项对象。
