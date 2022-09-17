import {all} from 'redux-saga/effects';

import {watchSignin} from './Auth/Signin';

export default function* rootSaga() {
    yield all([
        watchSignin(),
    ])
}