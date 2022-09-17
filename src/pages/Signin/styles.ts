import styled from 'styled-components';
import {colors} from '~/theme';

import {Form} from 'formik';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background-color: ${colors.red};
    height: 100vh;
`;

export const FormContainer = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.white};
    border-radius: 8px;
    padding: 36px 16px 36px 16px;
    width: 600px;
    margin-top: 300px;
`

export const FormTitle = styled.h4`
    font-size: 24px;
    color: ${colors.black};
    margin: 20px 0px 20px 0px; 
`;

export const Footer = styled.div`
    margin-top: 20px;
`;