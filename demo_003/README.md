# webpack核心概念-mode

- [webpack核心概念-mode](#webpack核心概念-mode)
  - [作用](#作用)
  - [默认值](#默认值)
  - [配置](#配置)

## 作用

告知webpack使用相应环境的内置优化

## 默认值

``` js
// 配置对象
module.exports = {
  mode: 'production'
}

// cli参数
webpack --mode=production
```

## 配置

| 选项 | 描述 |
|----:|:-----|
|`production`| 会将 `DefinePlugin` 中 `process.env.NODE_ENV` 的值设置为  `production`.<br/><br/>启用 `FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin`, `SideEffectsFlagPlugin` 和 `TerserPlugin`。 |
|`development`| 会将 `DefinePlugin` 中 `process.env.NODE_ENV` 的值设置为 `development`.<br/><br/>启用 `NamedChunksPlugin` 和 `NamedModulesPlugin` |
|`none`| 退出任何默认优化选项 |
