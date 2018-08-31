import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {applyMiddleware,createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import WalkersRedusers from "./components/dashboard/redusers/walkers";
// import logger from "redux-logger";
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';





const store=createStore(combineReducers({reducer, walkers : WalkersRedusers}) , applyMiddleware(thunk));
// console.log(store.getState())
// store.subscribe(()=>(console.log(store.getState())))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
