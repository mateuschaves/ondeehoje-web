import styled from 'styled-components';
import {Field} from 'formik';

import {colors} from '~/theme';

export const TextInput = styled(Field)`
    border: 1px solid ${colors.lightGray};
    border-radius: 8px;
    height: 56px;
    width: 300px;
    margin: 20px 0px 20px 0px;
    padding: 16px;
    &:focus {
        border: 2px solid ${colors.red};
        outline: none;
    }
`;
