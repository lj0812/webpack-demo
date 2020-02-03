# webpack api: 命令行接口


- [webpack api: 命令行接口](#webpack-api-命令行接口)
  - [描述](#描述)
  - [优先级](#优先级)
  - [用法](#用法)
    - [使用配置文件的用法](#使用配置文件的用法)
    - [不使用配置文件的用法](#不使用配置文件的用法)
  - [配置项](#配置项)
    - [环境选项](#环境选项)

## 描述

CLI 中传入的任何参数会在配置文件中映射为对应的参数

## 优先级

命令行接口(Command Line Interface)参数的优先级，高于配置文件参数

## 用法

### 使用配置文件的用法

``` shell
webpack [--config webpack.config.js]
```

### 不使用配置文件的用法

``` shell
webpack <entry> [<entry>] -o <output>
```

## 配置项

### 环境选项

当 webpack 配置对象导出为一个函数时，可以向起传入一个"环境对象(environment)"。

``` js
webpack --env prod // "prod"
webpack --env.prod // { prod: true }
webpack --env.prod=1 // { prod: 1 }
webpack --env.prod=foo // { prod: "foo" }
webpack --env.prod --env.min // { prod: true, min: true }
webpack --env.prod --env min // [{ prod: true }, "min"]
webpack --env.prod=foo --env.prod=bar // {prod: [ "foo", "bar" ]}
```
