# 生命周期

`constructor`是组件第一个生命周期，该周期是组件（构造函数）实例化的时候，获取`props`和`state`或者执行一些初始化函数的一个周期

该周期就是我作为一个组件，我演员拿剧本（props）和化妆（state），准备最好的状态去登场

ES5是用`getDefaultProps()`和`getInitialState`这两个来表述该生命周期

ES6是用`constructor`来表述该状态
```js
constructor(props){
    super(props)
    // 父传子 老爸给我的
    this.props = props;
    // 自己拥有的 就是vue组件里面data  Model
    this.state = {
        "title":"微信"
    };
}
```

`componentWillMount`就是演员要登场了，导演给你的剧本（props）是不能变得，能变得是的你展示给观众（view）的状态（state）

这个状态告诉我们两点，演员登场前可以在这里改变自己状态，该演员也只能登场一次,我们一般在该生命周期里面更改`state`但不要更改`props`
```js
// 登场前
componentWillMount(){
    this.setState({
        "title":"支付宝"
    })
}
```

`render`

演员排练的时候

组件必须的，组件的内容必须依赖该周期呈现

其实就是用数据配合`html`构造虚拟的DOM，因为操作虚拟DOM性能比较高，我会构造虚拟DOM去操作，等待下一步的挂载，将虚拟DOM挂到真实DOM节点上
```
render() {
    return (<div>
        {this.state.title}
    </div>);
}
```

`componentDidMount`

演员登场的时候

这一步把刚才准备好的虚拟DOM挂载到真实DOM上面,你如果想去操作真实DOM结构，必须在这一个周期之后去操作，ajax请求一般放在这个地方，其实这个生命周是整个组件最稳定的周期
```js
componentDidMount(){
                
}
```
`componentWillReceivePorps`这是接受新的`props`时候调用

`shouldComponentUpdate`优化性能的一环,可以自己编写一些条件，如果该周期返回true就会更新数据模型，如果返回false就停止更新
```
// 只要props和state变化，该生命周期必定触发
shouldComponentUpdate(){
    if(this.state.inputValue.length>5){
        return true
    }else{
        return false
    }
}
```
`componentWillUpdate` 相当于vue中的`beforeUpdate`
`componentDidUpdate` 相当于vue中的`updated`

`componentWillUnmount` 相当于vue中的`destoryed`销毁了
以下两个可以触发销毁阶段
```js
vue-router   /react-router
v-if         /函数式编程实现v-if,来让组件从节点出现或者销毁
```


# 虚拟DOM

页面展示展示的内容`真实DOM`,真的在浏览器存在的DOM就是真实DOM

`虚拟DOM`不在浏览器存在的DOM就是虚拟DOM

```js
$.ajax().done((data)=>{
    // 把后端给的数据渲染到DOM结构上
    // render
    var html = data.arr.map((item)=>{
        return `
            <li>${item}</li>
        `
    }).join("");
    // 在挂载前我需要有一个html结构，但是该html结构是我用JS解析之后存到变量里面的，html就是虚拟的DOM，挂载前有数据，有虚拟DOM，而虚拟DOM其实用JS配合数据生成的
    // JS修改变量成本低廉，但是如果操作DOM成本昂贵吗,性能低效
    // 挂载前
    $("ul").html(html);
    // 挂载后
    // componentDidMount
})
```

# 表单

v-model仅且只能用在`select,textarea和input`获取用户输入的内容

表单，其实用户提交数据给逻辑层（JS），逻辑层有一个数据存储的地方（model）层

react用户想把视图（用户看到页面的内容view）上的数据带回到数据层（model），只能通过监听事件来实现

vue想把视图数据带回数据层`v-model`和`v-on/@xxx`

如果vue没有`v-model`它其实跟react是一样的，单向数据绑定和双向数据绑定的区别，vue有`v-model`，而react没有，要实现`v-model`只能通过事件配合`setState`来实现


> v-model (vue) = onchange + setState (react)

# 面试题

- React有哪些生命周期

- 和vue生命周期的区别 (vue是有编译前和后，但是react，它从挂载前和后开始的，但也有vue没有的生命周期`componentWillReceivePorps`和`shouldComponentUpdate`)

- react怎么实现表表单功能

> v-model (vue) = onchange + setState (react)

- 什么是虚拟DOM，好处是什么（性能，优化）操作虚拟DOM是高效，但是操作真实DOM节点比较高昂


