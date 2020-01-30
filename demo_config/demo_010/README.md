# webpack配置-devtool

- [webpack配置-devtool](#webpack配置-devtool)
  - [描述](#描述)
  - [配置值](#配置值)
  - [示例](#示例)

## 描述

此选项控制是否生成，以及如何生成 source map。

注意：* 可以直接使用 `SourceMapDevToolPlugin`/`EvalSourceMapDevToolPlugin` 来替代使用 `devtool` 选项，因为它有更多的选项。**切勿同时使用** `devtool` 选项和 `SourceMapDevToolPlugin`/`EvalSourceMapDevToolPlugin` 插件。因为 `devtool` 选项在内部添加过这些插件，所以会导致应用两次插件。*

## 配置值

devtool                        | 构建速度 | 重新构建速度 | 生产环境 | 品质(quality)
------------------------------ | ----- | ------- | ---------- | -----------------------------
(none)                         | +++   | +++     | yes        | 打包后的代码
eval                           | +++   | +++     | no         | 生成后的代码
cheap-eval-source-map          | +     | ++      | no         | 转换过的代码（仅限行）
cheap-module-eval-source-map   | o     | ++      | no         | 原始源代码（仅限行）
eval-source-map                | --    | +       | no         | 原始源代码
cheap-source-map               | +     | o       | yes        | 转换过的代码（仅限行）
cheap-module-source-map        | o     | -       | yes        | 原始源代码（仅限行）
inline-cheap-source-map        | +     | o       | no         | 转换过的代码（仅限行）
inline-cheap-module-source-map | o     | -       | no         | 原始源代码（仅限行）
source-map                     | --    | --      | yes        | 原始源代码
inline-source-map              | --    | --      | no         | 原始源代码
hidden-source-map              | --    | --      | yes        | 原始源代码
nosources-source-map           | --    | --      | yes        | 无源代码内容

> `+++` 非常快速, `++` 快速, `+` 比较快, `o` 中等, `-` 比较慢, `--` 慢

注意：*其中一些值适用于开发环境，一些适用于生产环境。<br/>
对于开发环境，通常希望更快速的 source map，需要添加到 bundle 中以增加体积为代价，<br/>
对于生产环境，则希望更精准的 source map，需要从 bundle 中分离并独立存在。`output.sourceMapFilename` 可以自定义生成的 source map 的文件名*

## 示例

显示所有 devtool 变体效果的示例

``` js
const path = require('path')

const pathResolve = rpath => {
  return path.resolve(__dirname, rpath)
}

module.exports = [
  'eval',
  'eval-cheap-source-map',
  'eval-cheap-module-source-map',
  'eval-source-map',
  'cheap-source-map',
  'cheap-module-source-map',
  'inline-cheap-source-map',
  'inline-cheap-module-source-map',
  'source-map',
  'inline-source-map',
  'hidden-source-map',
  'nosources-source-map'
].map(devtool => ({
  mode: 'development',
  entry: pathResolve('index.js'),
  output: {
    path: pathResolve('../../dist/demo_config/demo_010'),
    filename: `[name]-${devtool}.js`
  },
  devtool,
  optimization: {
    runtimeChunk: true
  }
}));

```

命令行在根目录运行：`webpack --config demo_config/demo_010/webpack.config.js`

之后将在 `/dist/demo_config/demo_010` 文件夹下生成若干文件及sourcemap文件
