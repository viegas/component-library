import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
    to {
		transform: rotate(360deg);
	}
`;

export const Spinner = styled.div`
    ${({ theme, size, strokeWidth, color }) => css`
        height: ${size}px;
        width: ${size}px;
        border-radius: 50%;

        border: ${strokeWidth}px solid rgba(0, 0, 0, 0.1);

        border-bottom-color: ${theme.colors[color]};
        border-top-color: ${theme.colors[color]};
        animation: ${rotate} 800ms ease infinite;
    `};
`;
