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