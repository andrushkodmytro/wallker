import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import {applyMiddleware,createStore,combineReducers,compose} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer/reducer";
import dashboardReducer from "./reducer/dashboardReducer";
// import logger from "redux-logger";
import thunk from 'redux-thunk';

import registerServiceWorker from './registerServiceWorker';




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(combineReducers({reducer, walkers : dashboardReducer}) , 
composeEnhancers(applyMiddleware(thunk)) )
// console.log(store.getState())
// store.subscribe(()=>(console.log(store.getState())))

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
