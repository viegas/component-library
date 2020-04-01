import styled, { css } from 'styled-components';

const buttonModifiers = {
    primary: (theme) => css`
        border: solid 2px ${theme.colors.blue};
        background-color: ${theme.colors.blue};
        color: ${theme.colors.white};

        &:hover {
            background-color: ${theme.colors['light-blue']};
        }
    `,
    secondary: (theme) => css`
        border: solid 2px ${theme.colors.blue};
        background-color: ${theme.colors.white};
        color: ${theme.colors.blue};

        &:hover {
            border-color: ${theme.colors['light-blue']};
            color: ${theme.colors['light-blue']};
        }
    `,
    disabled: (theme) => css`
        border: solid 2px ${theme.colors.neutral};
        background-color: ${theme.colors['ligth-neutral']};
        cursor: not-allowed;
    `,
};

export const Button = styled.button`
    ${({ theme, type }) => css`
        position: relative;
        max-width: 320px;
        border-radius: 50vh;

        padding: ${theme.spacings.small} ${theme.spacings.large};
        font-size: ${theme.font.size.info};

        text-align: center;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        cursor: pointer;

        ${buttonModifiers[type](theme)}
    `};
`;

export const LoaderWrapper = styled.span`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    > svg {
        display: block;
    }
`;
