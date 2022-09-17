import {call, put, takeLatest, delay} from 'redux-saga/effects';
import {AnyAction} from 'redux';

import {AxiosResponse} from 'axios';

import {
    signinActions,
    signinTypes,
} from '~/store/ducks/Auth/Signin';

import {User} from '~/shared/types/entity';

import {SigninDto} from '~/shared/dto/Auth/signin.dto';
import {AuthService} from '~/services/api/resources';

interface signinSagaProps extends AnyAction {
    payload: SigninDto;
}

export function* signinSaga({payload}: signinSagaProps) {
    try {
        // const response: AxiosResponse<User> = yield call(AuthService.sigIn, payload);
        const {email} = payload;
        const response: AxiosResponse<User> = {
            data: {
                email,
                name: '',
                token: '',
            },
            config: {},
            headers: {},
            status: 200,
            statusText: 'ok',
        };

        yield delay(3000);
        yield put(signinActions.signinSuccess(response));
    } catch (error) {
        yield put(signinActions.signinError(error));
    }
}

export function* watchSignin() {
    yield takeLatest(signinTypes.SIGNIN_REQUEST, signinSaga);
}