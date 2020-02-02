# webpack loader: style-loader

- [webpack loader: style-loader](#webpack-loader-style-loader)
  - [描述](#描述)
  - [用法](#用法)

## 描述

通过增加`style`标签添加CSS到DOM中，建议将 style-loader 与 css-loader 结合使用

## 用法

``` js
import style from './file.css';
```

``` js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ],
      },
    ];
  }
}
```
