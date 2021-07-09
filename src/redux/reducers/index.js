import {combineReducers} from 'redux';

import gogglesReducer from './Goggles/GogglesReducer'
import userReducer from './User/UserReducer'

const rootReducer = combineReducers({
    gogglesReducer,
    userReducer,
});

export default rootReducer;