import client from '../client';
import {SigninDto} from '~/shared/dto/Auth/signin.dto';

const sigIn = (data: SigninDto) => {
    return client({
        url: 'signin',
        method: 'GET',
        data,
    });
}

export default {
    sigIn,
}