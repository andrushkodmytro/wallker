import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import allRedusers from '../src/redusers/main-reduser';

const store = createStore (allRedusers);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
document.getElementById('root'));
registerServiceWorker();
