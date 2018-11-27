# 安装

```js
react.min.js - React 的核心库

react-dom.min.js - 提供与 DOM 相关的功能

babel.min.js - Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码。Babel 内嵌了对 JSX 的支持。通过将 Babel 和 babel-sublime 包（package）一同使用可以让源码的语法渲染上升到一个全新的水平
```

```html
<script src="../js/react.js"></script>
<!-- 提供全局的 React变量 -->
<script src="../js/react-dom.js"></script>
<!-- 提供全局的 ReactDOM变量  -->
<script src="../js/babel.js"></script>
```


# helloworld

render渲染

提供要渲染的模板<div>hello world</div>

该模板要渲染的位置 document.querySelector("#demo")

>注意：模板里面仅且只能有一个节点，一个父节点，不能有多个兄弟节点

这是我们react的起手动作
```js
ReactDOM.render(
    <div>hello world</div>,
    document.querySelector("#demo")
)
```
这是我们react的起手动作
```js
new Vue({})
```

# React vs Vue

|React|Vue|jQuery|
|-|-|-|
|代码较多20000行|vue10000行||
|较复杂|精简||
|`{}`|`{{}}`|
||指令 |

# JSX

## 模板语法

> JSX = JS + HTML

JSX是react特有的语法

在JS里面放入了HTML结构，这种就是react用到的jsx语法

相对于这个vue，vue是用两个大括号`{{}}`来渲染数据的
```html
<!-- M -->
data:{
    name:"xxx"
}
<!-- V -->
{{name}}
```


不好意思，我只用一个大括号`{}`
```html
<!-- M -->
var data = {
    name:"xxx"
}
<!-- V -->
{data.name}
```

## 函数式编程

进来，然后通过函数里面的（算法等乱七八糟）的处理，返回给你的东西

指令`v-text,v-html,v-model,v-if,v-show`,本质是接受数据，返回对应的视图

函数式编程其实是指令的另一种呈现

可以模拟一切vue的指令
```js
V = T(M)
```
```js
function people(name){
    return name
}

视图层 = people(数据层)
```
## 渲染数组

相当于vue里面`v-for`指令
```js
<!-- 数据 -->
let data = {
    arr:[
        <p key='1'>a</p>,
        <p key='2'>b</p>,
        <p key='3'>c</p>
    ]
}
<!-- 视图 -->
<div>{data.arr}</div>
<!-- 转化为以下内容 -->
<div>
    <p key='1'>a</p>
    <p key='2'>b</p>
    <p key='3'>c</p>
</div>
```


## style

style接受的是对象，相当于`v-bind:style`或者`:style`

fontSize这种要驼峰写法
```
<div style={{
    display: "none",
    fontSize: "14px"
}}></div>
```

## 属性

相当于vue里面的`v-bind:xxx`
```js
<div name={data.name}>
    hello world
</div>
```
由于属性值class是关键词，避免和JS里面冲突，如果属性值出现下面两个的话，要进行转换

||React|
|-|-|
|class|className|
|for|htmlFor|
```html
<img src={data.src} />
<p className=""></p>
<label htmlFor=""  />
```

## 渲染html结构

代替`v-html`尽量少用,放置xss攻击

```html
<!-- data -->
html: '<p>123<span style="color:red">456</span>789</p>'
<!-- view -->
<div dangerouslySetInnerHTML={{__html:data.html}}></div>
```

## v-if

代替`v-if`指令
```js
<div>{
    (()=>{
        if(data.bool){
            return <p>真</p>
        }
    })()
}</div>    
```

## v-on

监听事件,原生的写法`onclick`而react需要on之后的那个字母大写`onClick`

|原生|React|Vue|
|-|-|-|
|onclick|onClick|@click/v-on:click|
|onchange|onChange||
|onkeyup|onKeyup|
|...||

```js
let methods = {
    test(e){
        console.log(e.target)
        console.log("你好")
    }
}
<div>
    <button onClick={methods.test}>ok</button>
</div>
```

## this的指向

`onClick={this.test}`这里是不能用加括号的这种方式来传参`onClick={this.test(params)}`

并且这样写之后`this.test`里面的this会是`undefined`

在react，函数带参数是要配合`bind`方法，通过`bind`获取`this`和参数
```html
<button @click="test()">ok</button>
<button onClick={this.test}>ok</button>
<!-- 参数 -->
<button onClick={this.test.bind(this,参数)}>ok</button>
```

# 组件

分治，方便管理，减少耦合

复用，提高效率，性能

组件的本质其实是函数,**最简单的组件**可以使用函数来定义,组件首字母必须是大写
```js
var Xheader =  (props) => {
    return <header>微博</header>
}
ReactDOM.render(
    <div>
        <Xheader />
        <Xheader />
    </div>,
    document.querySelector("#demo")
)
```
以ES6定义类的方式去生命组件是最常用的，也是我建议用的方法
```js
class Xheader extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return <header>微信</header>;
    }
}
ReactDOM.render(
    <div>
        <Xheader />
        <Xheader />
    </div>,
    document.querySelector("#demo")
)
```
# props

props是继承父一辈的东西

父子组件通信的话，首选`props`，父子，不推荐用在隔代遗传（父传孙子）

如果需要让同一个组件呈现不同的状态，可以考虑用props来解决，父组件往子组件的属性值上面定义一个值，然后该子组件就可以接受该值呈现对应的状态

```js
class Xheader extends React.Component {
    constructor(props){
        super(props)
        console.log(props);
        this.props = props;
    }
    render() {
        return <header>{this.props.title}</header>;
    }
}
ReactDOM.render(
    <div>
        <Xheader title="微信" />
        <Xheader title="支付宝" />
    </div>,
    document.querySelector("#demo")
)
```
`ReactDOM.render`这个老爸，把`微信`和`支付宝`分别传给两个不同的儿子`<Xheader>`,这两个儿子通过自身的`props`来吸收，然后转化自己的属性值显示

# state

state是自己努力得来的

state在程序里面一般是通过`ajax`来向后端要的，或者自己写死的

state是组件自己独有的数据，它不受外界影响，它的数据一般来说是自己提供，并且自己触发更改

相对props是不一样，props是祖传下来的

vue MVVM  数据变视图变，视图变数据变

react SV (state,view) 状态变视图变，但是视图变状态不变

一般来说，我们说的数据驱动，大部分是指（vue的data）或者（react的state），但是它只是数据的代言人，它不能代表全部，真正的数据指的是类组件里面，所有的`props,state和函数`等
```js
class Xheader extends React.Component {
    constructor(props){
        super(props)
        // 父传子 老爸给我的
        this.props = props;
        // 自己拥有的 就是vue组件里面data
        this.state = {
            "title":"微信"
        };
    }
    render() {
        return <header>{this.state.title}</header>;
    }
}
ReactDOM.render(
    <div>hello world</div>,
    document.querySelector("#demo")
)
```


# setState或者setProps

react的语法是`{}`，单向数据绑定

vue的语法是`{{}}`，双向数据绑定

vue里面

1. data变了，view层通过`v-xxx`或者`{{}}`指令，来渲染数据   M->V

2. view变了，你通过`v-on`或者`v-model`来把数据从视图层带回数据层  V-M

react里面

1. data变了，是通过函数式编程和`{}`，来渲染数据   S->V

2. view变了，通过事件触发`setState`来更改数据层  V->S
