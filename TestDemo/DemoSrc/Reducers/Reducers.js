import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';

const Reducers = combineReducers({
    login : LoginReducer
});

export default Reducers;