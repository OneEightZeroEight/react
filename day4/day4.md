# 脚手架

[creact react app的官方文档](https://github.com/facebook/create-react-app)

以系统管理员的身份，安装该脚手架全局命令
```bash
npm install create-react-app -g
```

你就会在全局命令行里面拥有一个`create-react-app`命令，可以用以下命令检查是否安装成功
```bash
create-react-app -V
```

创建第一个项目，如果安装不成功可以考虑换这两个尝试一次`yarn`和`cnpm`
```bash
create-react-app [项目名字]
create-react-app my-app //例如这样
```

启动项目
```bash
cd my-app
npm start //或者 npm run start
```

在浏览器里面，查看该地址
```bash
http://localhost:3000/
```

```bash
public 单页面应用的主页（ico，index.html）
src 开发文件夹(组件，自定义模块，样式，模板)
```

react和vue的脚手架都是基于webpack的

# 路由

|type|des|
|-|-|
|实现单页面应用程序single page application(SPA)（今日头条）|不刷新整个页面，永远在一个`index.html`，依靠路由切换具体的场景，首次加载大部分大部分东西，后面异步加载具体要更新的内容|
|多页面应用程序(腾讯新闻)|页面跳转,整体刷新，资源文件重新加载|

[React-Router-DOM官方文档](https://reacttraining.com/react-router/web/guides/quick-start)
```
vue vue-router vuex vue-cli vue-devtool axios webpack less express nodejs mongodb mint-ui bootstrap jQuery 
```

安装路由模块`react-router-dom`
```js
npm install react-router-dom
```

```js
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
```

## BrowserRouter和HashRouter

`BrowserRouter`称为浏览器路由，使用的时候是url上面不带`#`，兼容性比较差，需要后端配合，好看

`HashRouter`称之为哈希路由，兼容性比较高


react-router-dom有三个内置组件
```js
import { HashRouter as Router , Link , Route} from "react-router-dom";
```
`Router`的作用是让包裹的子组件产生路由场景,相当于`<router-view>`
```js
ReactDOM.render(
    <Router>
        <App />
    </Router>
, document.getElementById('root'));
```
`Link`相当于`<a>`标签，提供跳转路由的功能
```html
<link to = "/xxxx">
```
Route相当于`vue-router`里面的配置参数
```html
<Route path="/" exact component={Index} />
<Route path="/detail/" component={Detail} />
```
上面代码的含义为

url匹配到`#/`切换到`Index`组件

url匹配到`#/detail/`切换到`Detail`组件

## 嵌套路由


路由里面放路由，第一层路由`/home/`，
```html
<Route path="/home/" exact component={Index} />
```
嵌套路由就是在Index组件里面在放一个`<Route>`组件，当进入`/home/hot`路径时，既加载`Index`组件，也加载`Wpannel`组件
```html
<Route path="/home/hot/" exact component={Wpannel} />
```
注意，嵌套路由的`path`是要把第一层路由的路径加上

## 编程式导航

除了使用`<Link>`标签跳转路由，还可以使用路由提供给你的`this.props.history`进行跳转


# vue-devtool和react-devtool

1. Clone this repo 克隆该仓库到本地
```
git clone https://github.com/vuejs/vue-devtools.git
cd vue-devtool
```
2. 安装该依赖包

```bash
npm install 
```
(Or yarn install if you are using yarn as the package manager)

3. 执行打包

打包插件
```bash
npm run build
```

4. 打开谷歌浏览器的`扩展程序`,打开右上角的`开发者模式`,点击左上角`加载已加压的扩展程序`，打开该`shells/chrome`目录，加载插件

```
Open Chrome extension page
Check "developer mode"
Click "load unpacked extension", and choose shells/chrome.
```

#  面试题

- 如何配置脚手架（全局create-react-app,es-lint）

- 