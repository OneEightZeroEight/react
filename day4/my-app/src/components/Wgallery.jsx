import React from "react";
import { connect } from 'react-redux';
import "weui";
class Wgallery extends React.Component {
    constructor(props) {
        super(props)
        this.props = props;
        console.log(props)
    }
    render() {
        return (
            <div className="weui-gallery" style={{ display: this.props.isShowGallery.bool?'block':'none'}}>
                <span className="weui-gallery__img" style={{ "backgroundImage": `url(${this.props.isShowGallery.src})` }}></span>
                <div onClick={this.props.toggleGallery.bind(this)} className="weui-gallery__opr">
                    <a href="javascript:" className="weui-gallery__del">
                        <i className="weui-icon-delete weui-icon_gallery-delete"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default connect((state)=>{
    return state
},(dispatch=>{
    return {
		toggleGallery(){
			dispatch({
				type:"toggleGallery",
				isShowGallery:{
					bool: !this.props.isShowGallery.bool,
        			src:""
				}
			})
		}
	}
}))(Wgallery);