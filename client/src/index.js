import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL = 'https://morning-ridge-50892.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);