import React from "react";
import { connect } from 'react-redux';
class Wnav extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        console.log(props)
    }
    render() {
        return (
            <div className="lite-nav-sublist m-col-4" style={{
                "position":"fixed",
                "top": "84px",
                "display":this.props.isShowNav?"block":"none"
            }}>
                <ul className="m-auto-list">
                    <li className="m-auto-box cur"><span className="m-text-cut">热门</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">新鲜事</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">搞笑</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">情感</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">明星</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">社会</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">数码</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">体育</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">汽车</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">电影</span></li>
                    <li className="m-auto-box"><span className="m-text-cut">游戏</span></li>
                </ul>
            </div>
        )
    }
}
// connet的第一个函数是获取store里面的值返回给组件     (拿)
// 二而第二个函数是定义一个方法给自身使用，而这个方法可以出发store里面的action   （改）
export default connect((state) => {
    console.log(state)
    return state
}, (dispatch) => {
    return {
        onIncreaseClick() {
            dispatch("increaseAction")
        }
    }
})(Wnav);
// export default Wnav;