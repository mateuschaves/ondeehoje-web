import React, {
    ButtonHTMLAttributes
} from 'react';

import {Bounce} from "react-activity";

import {Button} from './styles';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading: boolean;
}

export default function FormButton(props: FormButtonProps) {

    function renderButtonContent() {
        if (props.loading) {
            return <Bounce />
        } else {
            return <>{props.children}</>
        }
    }

    return <Button {...props}>
        {renderButtonContent()}
    </Button>
}