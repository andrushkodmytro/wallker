import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {applyMiddleware,createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer";
import logger from "redux-logger";

import registerServiceWorker from './registerServiceWorker';





const store=createStore(combineReducers({reducer}) , applyMiddleware(logger));
console.log(store.getState())
store.subscribe(()=>(console.log(store.getState())))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
