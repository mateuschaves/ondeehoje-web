import {combineReducers} from 'redux';

import {signinReducer as signin} from './Auth/Signin';

const reducers = combineReducers({
    signin,
});

export default reducers;