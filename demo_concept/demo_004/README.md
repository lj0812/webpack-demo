# webpack核心概念-loader

- [webpack核心概念-loader](#webpack核心概念-loader)
  - [作用](#作用)
  - [规则](#规则)
  - [基本用法](#基本用法)
  - [解析loader(如何找到正确的loader)](#解析loader如何找到正确的loader)
    - [一般规则：模块解析](#一般规则模块解析)
      - [路径解析（找到正确的文件路径）](#路径解析找到正确的文件路径)
      - [文件解析（找到正确的文件）](#文件解析找到正确的文件)
    - [独立规则：resolveLoader](#独立规则resolveloader)

## 作用

loader 用于对模块的源代码进行转换，本身是一个函数，接受源代码作为参数

## 规则

loader 从右到左地取值(evaluate)/执行(execute)

## 基本用法

推荐使用配置文件的方式，其他的方式还有 内联形式 和 cli配置

``` js
module.exports = {
  module: {
    rules: [
      {
        test: /\.txt$/,   // 指定匹配规则
        use: 'raw-loader' // 指定使用的loader
      },
      {
        test: /\.scss$/,
        // 使用多个loader时，执行顺序为: sass-loader -> css-loader -> style-loader
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
}
```

## 解析loader(如何找到正确的loader)

loader 遵循 模块解析 标准

### 一般规则：模块解析

#### 路径解析（找到正确的文件路径）

webpack 使用 [enhanced-resolve](https://github.com/webpack/enhanced-resolve) 来解析文件路径。常见形式有：

- **绝对路径**: 已经取得了文件的绝对路径，不再进一步做解析
- **相对路径**: 使用 `import` 或 `require` 的资源文件所在的目录，被认为是上下文目录。解析时将使用此上下文路径拼接在`import/require`中给定的相对路径来产生模块的绝对路径
- **模块路径**: 模块将在`resolve.modules`中指定的所有目录内搜索(替换路径可通过`resolve.alias`配置来创建别名)

  ``` js
  module.exports = {
    //...
    resolve: {
      modules: ['node_modules'],
      alias: {
        Utils: path.resolve(__dirname, 'src/utils/'), // 可使用 import xx from 'Utils' 代替 import xx from './path/to/src/utils'
      }
    }
  };
  ```

#### 文件解析（找到正确的文件）

根据上面 路径解析 确定路径后，resolver 将检查路径是否指向文件或路径

- 路径指向一个文件
  1. 如果路径具有文件拓展名，直接使用指定文件
  2. 否则，使用`resolve.extensions`选项作为文件拓展名来解析

      ``` js
      module.exports = {
        //...
        resolve: {
          extensions: ['.wasm', '.mjs', '.js', '.json'] // 默认值
        }
      };
      ```

- 路径指向一个文件夹
  1. 如果文件夹中包含`package.json`文件，则按照顺序查找`resolve.mainFields`配置选项中指定的字段，

      ``` js
      // resolve.mainFields的功能
      // 当从 npm 包中导入模块时（例如，import * as D3 from 'd3'），此选项将决定在 package.json 中使用哪个字段导入模块

      // 根据 webpack 配置中指定的 target 不同，默认值也会有所不同

      // 当 target 属性设置为 webworker, web 或者没有指定，默认值为：
      module.exports = {
        //...
        resolve: {
          mainFields: ['browser', 'module', 'main'] // 此时将按顺序查找package.json文件中的browser、module、main字段指定的文件，（后缀由上面的resolve.extensions决定）
        }
      };

      // 对于其他任意的 target（包括 node），默认值为：
      module.exports = {
        //...
        resolve: {
          mainFields: ['module', 'main']
        }
      };
      ```

  2. 如果不存在`package.json`文件或者`package.json`文件中的 main字段(即`resolve.mainFields`数组的最后一项) 没有返回一个有效路径，则按顺序查找 `resolve.mainFiles` 配置选项中指定的文件名

      ``` js
      // resolve.mainFiles作用：解析目录时要使用的文件名。
      module.exports = {
        //...
        resolve: {
          mainFiles: ['index'] // 即此时查找对应路径下的index文件（后缀由上面的resolve.extensions决定）
        }
      };
      ```

### 独立规则：resolveLoader

loader 的解析规则，也遵循文件解析的特定规则。但是 `resolveLoader` 配置选项，可以用来为 loader 提供独立的解析规则。

``` js
// resolveLoader 选项与上面的 resolve 对象的属性集合相同，但仅用于解析 webpack 的 loader 包。默认：
module.exports = {
  //...
  resolveLoader: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    mainFields: ['loader', 'main']
  }
};
```
