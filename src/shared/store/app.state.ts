import {AxiosError, AxiosResponse} from 'axios';
import {User} from '~/shared/types/entity';

export interface InitialSigninStateProps {
    data: AxiosResponse<User> | undefined,
    loading: boolean,
    error: AxiosError | undefined,
}


export interface RootState {
    signin: InitialSigninStateProps;
}