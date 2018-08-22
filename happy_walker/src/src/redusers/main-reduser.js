import {combineReducers} from 'redux';
import WalkersRedusers from './walkers.js';

const allRedusers = combineReducers ({
    walkers : WalkersRedusers
});

export default allRedusers;