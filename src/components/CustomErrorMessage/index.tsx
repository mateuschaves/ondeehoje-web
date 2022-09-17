import React from 'react'

import {ErrorMessage, ErrorMessageProps} from 'formik';

import {Message} from './styles';

export default function CustomErrorMessage(props: ErrorMessageProps) {

    function renderCustomErrorMessage(errorMessage: string) {
        return <Message>{errorMessage}</Message>
    }

    return (
        <ErrorMessage
            render={renderCustomErrorMessage}
            {...props}
        />
    )
}
