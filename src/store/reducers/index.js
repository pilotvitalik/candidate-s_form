import {combineReducers} from 'redux';
import defaultReducer from './defaultSlice';

const rootReducer = combineReducers({
    count: defaultReducer,
})

export default rootReducer;