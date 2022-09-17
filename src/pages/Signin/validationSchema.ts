import * as Yup from 'yup';

const SigninSchema = Yup.object().shape({
        email: Yup.string().trim().email('Email inválido =(').required('Digite seu email !'),
        password: Yup.string().trim().required('Digite sua senha !').min(4, 'Senha muito curta !')
    });

export default SigninSchema;