import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { constants } from '~/config';
import errorHandler from './errorHandler';


const instance = axios.create({
    baseURL: constants.BASE_URL,
})

const client = async (options: AxiosRequestConfig, handlerError = true) => {
    const onSuccess = (response: AxiosResponse) => {
        return response;
    }

    const onError = (error: AxiosError) => {
        return errorHandler(error, handlerError);
    }

    try {
        const response = await instance(options);
        return onSuccess(response);
    } catch (error) {
        return onError(error);
    }
}

export default client;