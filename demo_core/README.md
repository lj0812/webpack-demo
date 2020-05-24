# 原理大解析

- [原理大解析](#原理大解析)
  - [开门见山，使用webpack的第一入口：webpack-cli](#开门见山使用webpack的第一入口webpack-cli)
    - [启动过程分析：分析 webpack 的入口文件：webpack.js](#启动过程分析分析-webpack-的入口文件webpackjs)
    - [webpack-cli 做的事情](#webpack-cli-做的事情)

## 开门见山，使用webpack的第一入口：webpack-cli

### 启动过程分析：分析 webpack 的入口文件：webpack.js

> 最终目的是webpack最终找到webpack-cli（webpack-command）这个npm包，并且执行CLI

1. 正常执行返回
2. 运行某个命令
3. 判断某个包是否安装
4. webpack可用的CLI：webpack-cli和webpack-command
5. 判断是否两个CLI是否安装了
6. 根据安装数量进行处理

### webpack-cli 做的事情

1. 引入yargs，对命令行进行定制
2. 分析命令行参数，对各个参数进行转换，组成编译配置项
3. 引用webpack，根据配置项进行编译和构建