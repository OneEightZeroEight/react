import React, { Component } from 'react';
import Wheader from './Wheader.jsx'
import Wpannel from './Wpannel.jsx'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Wheader />
        <Wpannel />
      </div>
    );
  }
}

export default App;
