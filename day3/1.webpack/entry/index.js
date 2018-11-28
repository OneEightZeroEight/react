import Vue from "vue";
import App from "./components/App.vue";
import "weui";
import "./styles/base.css";
new Vue({
    el: "#demo",
    data: {
        name: "ly"
    },
    render: function (createElement) {
        return createElement(
            'App', // 标签名称
            {}, //标签属性值
            [
            ] // 子元素数组
        )
    },
    components:{
        App,
    }
})
console.log(Vue)