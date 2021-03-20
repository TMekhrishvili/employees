import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3001/'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

