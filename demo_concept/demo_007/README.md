# webpack核心概念-dependency graph（依赖图）

- [webpack核心概念-dependency graph（依赖图）](#webpack核心概念-dependency-graph依赖图)
  - [概念](#概念)
  - [描述](#描述)

## 概念

任何时候，一个文件依赖于另一个文件，webpack 就把此视为文件之间有 **依赖关系**，这使得 webpack 可以接收非代码资源(non-code asset)（例如 images 或 web fonts），并且可以把它们作为 _依赖_ 提供给你的应用程序

## 描述

webpack 从命令行或配置文件中定义的一个模块列表开始，处理你的应用程序。 从这些 **入口起点** 开始，webpack 递归地构建一个依赖图，这个依赖图包含着应用程序所需的每个模块，然后将所有这些模块打包为少量的 bundle - 通常只有一个 - 可由浏览器加载。
