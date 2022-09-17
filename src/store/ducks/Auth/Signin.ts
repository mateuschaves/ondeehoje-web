 import {AxiosError, AxiosResponse} from 'axios';
 
 import {User} from '~/shared/types/entity';
 import {SigninDto} from '~/shared/dto/Auth/signin.dto';

 import {InitialSigninStateProps} from '~/shared/store/app.state';

 export const signinTypes = {
    SIGNIN_REQUEST: 'auth/SIGNIN_REQUEST',
    SIGNIN_SUCCESS: 'auth/SIGNIN_SUCCESS',
    SIGNIN_ERROR: 'auth/SIGNIN_ERROR',
};

export const signinActions = {
    signin: (data: SigninDto) => ({
        type: signinTypes.SIGNIN_REQUEST,
        payload: data,
    }),
    signinSuccess: (data: AxiosResponse) => ({
        type: signinTypes.SIGNIN_SUCCESS,
        payload: data,
    }),
    signinError: (error: AxiosError) => ({
        type: signinTypes.SIGNIN_ERROR,
        payload: error,
    }),
};

interface actionProps {
    type?: string;
    payload?: AxiosError | AxiosResponse<User>;
}

const initialState: InitialSigninStateProps = {
    data: undefined,
    loading: false,
    error: undefined,
};

export const signinReducer = (state = initialState, action: actionProps) => {
    switch (action.type) {
        case signinTypes.SIGNIN_REQUEST:
            return {...state, loading: true};
        case signinTypes.SIGNIN_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case signinTypes.SIGNIN_ERROR:
            return {
                ...state,
                loading: false,
                data: undefined,
                error: action.payload,
            };
        default:
            return state;
    }
};