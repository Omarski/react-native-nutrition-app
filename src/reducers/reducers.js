
import {combineReducers} from 'redux';

import userReducers from './userReducers';
import appReducers from './appReducers';

export default combineReducers({userReducers,appReducers}); //combination, need makeStore ==> store with state



