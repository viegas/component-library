import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${({ theme }) => css`
        cursor: default;
        display: inline-block;

        font-size: 12px;
        color: ${theme.colors['powder-700']};
        background-color: ${theme.colors['powder-100']};

        padding: 5px 7px;

        border-width: 1px;
        border-style: solid;
        border-radius: 3px;
        border-color: transparent;

        :hover {
            color: ${theme.colors['powder-800']};
            background-color: ${theme.colors['powder-200']};
        }
    `};
`;
