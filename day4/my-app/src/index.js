import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './styles/index.css';
import './styles/app.css';
import './styles/cards.css';
import './styles/base.css';
import App from './components/App';
import * as serviceWorker from './libs/serviceWorker';
React.axios = axios;

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
