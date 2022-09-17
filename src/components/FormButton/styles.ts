import styled from 'styled-components';
import {darken} from 'polished';
import {colors} from '~/theme';

export const Button = styled.button`
    background-color: ${colors.red};
    padding: 16px;
    color: ${colors.white};
    border-radius: 8px;
    width: 300px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;

    &:hover {
        background-color: ${darken(0.05, colors.red)};
    }
`;