# webpack

基于nodeJS,来实现模块化的

gulp自动化构建工具，打包合并压缩重命名等...

webpack其实也是一套自动化构建工具，在打包代码的时候也是跟gulp很想的

webpack功能相对多

<img src="what-is-webpack.png" />

左边比较多的文件（模块），也比较多的格式（js,css,html,jsx,scss）

右边文件比较少，大部分都是转为JS格式，还有一些图片格式

webpack其实处理各种类型的文件，最终想把他们尽可能的转为JS类型的文件（打包，合并，压缩）

webpack 多变少（一个）多进少出

gulp 多变多 多进多出

webpack它默认只能处理JS类型文件，它不自带处理其他非JS文件的功能
如果你想webpack处理非JS类型文件，必须安装其他第三方插件来实现，webpack里面这种插件称之为`loaders`(加载器)

> loader = 处理各种非JS类型文件

gulp要拓展功能需要装第三方插件
```
gulp-sass
gulp-minify
gulp-concat
```

开发是在`entry`里面,发布是在`output`文件夹

## 安装


1. 在根目录下新建`webpack.config.js`
```js
gulp gulpfile.js
webpack webpack.config.js
```
2. 用npm安装`webpack`的依赖包,全局安装一次，本地也安装一次

```bash
npm install gulp -g //全局
npm install gulp    //本地


npm install webpack -g
npm install webpack-cli -g
npm install webpack
```

3. 往配置文件里面写对应的配置

四大概念

```
入口(entry)
输出(output)
loader
插件(plugins)
```

**entry**

跟我们的`gulp`的`gulp.src()`，入口其实就是要导入需要处理的文件，放文件名

在`webpack.config.js`同级目录下，新建`entry`文件夹
```js
// 配置参数
module.exports = {
    // 入口 把index.js导入进来处理
    entry: './entry/index.js'
};
```

**output**

在`webpack.config.js`同级目录下，新建`output`文件夹
```js
const path = require('path');
// 配置参数
module.exports = {
    // 入口 把index.js导入进来处理
    entry: './entry/index.js',
    output: {
        // 写一段路径，寻找output文件夹
        path: path.resolve(__dirname, 'output'),
        // 在output文件夹里面导出文件名为bundle.js
        filename: 'bundle.js'
    }
};
```

在入口文件夹`entry`的`index.js`里面写入以下代码
```js
import $ from "jquery";//记得先安装 npm install jquery
$("body").html("helloworld");
```

4. 编译

在`webpack.config.js`文件夹的命令行里面执行`webpack`命令,如果成功的话会在`output`文件夹下生成一份新的`bundle.js`
```js
webpack
```
`require.js`模块化，分开模块管理项目，并且能重复使用模块

> webpack = gulp + requirejs

既做打包合并也做模块化，相对于`gulp`，它就是更偏重于模块化

`vue-cli`基于`webpack`,它就的模块化就是基于webpack的


# 要实现vue的组件

因为`.vue`组件是非JS类型文件，我们需要安装`vue-loader`来处理
```bash
npm install vue-loader
npm install sass-loader
npm install html-loader
npm install css-loader
npm install json-loader
```

# 配置loader

安装完对应的loader之后，还需要在`webpack.config.js`文件里面进行配置

这些loader都是帮你处理不同类型的文件(非JS类型文件)，`test`是正则，匹配文件名字，`use`是加上你对应`loader`的名字

```js
module: {
    rules: [{
        test: /\.vue$/,
        use: 'vue-loader'
    }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }, {
        test: /\.png|jpg|jpeg$/,
        use: ['url-loader']
    }]
},
```


# 面试题

- webpack和gulp的区别

- webpack的四大概念入口(entry)输出(output)loader插件(plugins)

- webpack如何实现模块化的

- webpack的打包后执行代码的原理`eval("console.log(1)")`