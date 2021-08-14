import {combineReducers} from 'redux';
import defaultReducer from './defaultSlice';
import formReducer from './formSlice';

const rootReducer = combineReducers({
    count: defaultReducer,
    form: formReducer,
})

export default rootReducer;