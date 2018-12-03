# redux

[vuex官网](https://vuex.vuejs.org/zh/guide/)

组件通信数据

- 父传子(props)         
- 兄弟通信（redux/vuex）平行组件之间的通信

```js
State（存放数据的地方）通信的数据都会存放在这里
Getter (获取需要通信的数据)
Mutation （修改交换的数据）
Action  （触发Mutation）
Module  （分开多个State仓库）
```

# 安装

安装`redux`的两个必须模块
```js
cnpm install --save redux
npm install --save react-redux
```

## 创建仓库

创建一个仓库，最终目的就是要生成一个`store`仓库，该仓库有一个`state`存放数据
还有一个`action`来触发`state`的更改
```js
import { createStore } from 'redux'
// react的写法
const store = createStore((state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
})
// vue的写法
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
```

## 与react进行关联

把`<Provider>`注入到根组件里面，把`<Router>`和`<App />`组件包含起来，把刚才上面生成的`store`注入到`<Provider store={store}>`组件里面，这个时候，整个app的都可以`redux`的状态管理
```js
// 把上面配置好的store和react进行关联
import { Provider, connect } from 'react-redux';
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));
```

## connect

把组件和`store`进行一次关联。就如果没有`connect`，这个仓库是没有任何人能访问的
```js
import { connect } from 'react-redux';
// 该组件如果想跟store进行连接就在导出的时候用
export default connect((state) => {
    // 第一个函数把store里面的值注入到Wnav组件的`props`上面
    // 第一个函数是获取store的值

    // 和store的state产生关系
    console.log(state)
    return state
}, (dispatch) => {
    // 第二个函数是触发store的值改变
    // 相当于vue（action，commit->mutation）
    // 你可以在此处定义多个函数，来去触发store里面的`dispatch`,从而改变`store`里面的值

    // 和store的action产生关系
    return {
        onIncreaseClick() {
            dispatch("increaseAction")
        }
    }
})(Wnav);

// 不连接store的话
// export default Wnav
```