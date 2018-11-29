import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Wheader from '../components/Wheader.jsx'
import Wpannel from '../components/Wpannel.jsx'
class Index extends Component {
    constructor(props){
        super(props);
        this.props = props;
    }
    render() {
        return (
            <div>
                <Wheader history={this.props.history} ></Wheader>
                <Route path="/home/hot/" component={Wpannel} />
                <Route path="/home/fresh/" component={Wpannel} />
            </div>
        );
    }
}

export default Index;