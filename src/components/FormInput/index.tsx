import React, {
    InputHTMLAttributes
} from 'react';

import {TextInput} from './styles';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function FormInput(props: FormInputProps) {
    return <TextInput
        {...props}
    />
}