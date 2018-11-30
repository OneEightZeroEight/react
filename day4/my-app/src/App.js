import React, { Component } from 'react';
import { Route } from "react-router-dom";

import Index from './pages/Index.jsx';
import Detail from './pages/Detail.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Redirect exact from='/' to='/home/hot/'/> */}
        <Route path="/home/" component={Index} />
        <Route path="/detail/" component={Detail} />
      </div>
    );
  }
}

export default App;
