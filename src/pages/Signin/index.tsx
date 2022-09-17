import React from 'react';

import FormInput from '~/components/FormInput';
import FormButton from '~/components/FormButton';
import CustomErrorMessage from '~/components/CustomErrorMessage';

import {Formik} from 'formik';
import ValidationSchema from './validationSchema';

import {InitialSigninStateProps, RootState} from '~/shared/store/app.state';

import {useDispatch, useSelector} from 'react-redux';
import {signinActions} from '~/store/ducks/Auth/Signin';

import {Container, FormContainer, FormTitle, Footer} from './styles';

interface FormValues {
    email: string;
    password: string;
}

export default function Signin() {

    const initialFormValues: FormValues = {
        email: '',
        password: '',
    }

    const signin = useSelector<RootState, InitialSigninStateProps>(state => state.signin);

    const dispatch = useDispatch();

    function handleSignin(values: FormValues) {
        const {email, password} = values;
        dispatch(signinActions.signin({
            email,
            password,
        }));
    }

    return (
        <Container>
            <Formik
                initialValues={initialFormValues}
                onSubmit={handleSignin}
                validationSchema={ValidationSchema}
                validateOnChange={false}
            >
                <FormContainer>
                    <FormTitle>React Auth Boilerplate</FormTitle>

                    <FormInput 
                        type="email"
                        name="email"
                        placeholder="Email"
                    />
                    <CustomErrorMessage name="email"/>

                    <FormInput 
                        type="password"
                        name="password"
                        placeholder="Senha"
                    />
                    <CustomErrorMessage name="password"/>

                    <Footer>
                        <FormButton type="submit" loading={signin.loading} disabled={signin.loading}>
                            Entrar
                        </FormButton>
                    </Footer>
                </FormContainer>
            </Formik>
        </Container>
    )
}
