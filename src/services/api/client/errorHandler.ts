import {
    AxiosError
} from 'axios';


const errorHandler = (error: AxiosError, handleError: boolean) => {
    if (!handleError) {
        return Promise.reject(error);
    }

    if (error.response) {
        switch (error.response.status) {
            case 400:
                break;
            case 401:
                
                break;
            case 422:
            default:
                break;
        }

    } 

    return Promise.reject(error);
};

export default errorHandler;