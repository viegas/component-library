import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Button.styles';
import Loader from '../loader/Loader';

const Button = ({ type, disabled, busy, children, ...props }) => {
    const blockActions = disabled || busy;

    return (
        <Styled.Button {...props} type={blockActions ? 'disabled' : type}>
            {children}
            {busy && (
                <Styled.LoaderWrapper>
                    <Loader color="blue-700" />
                </Styled.LoaderWrapper>
            )}
        </Styled.Button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary']),
    disabled: PropTypes.bool,
    busy: PropTypes.bool,
    children: PropTypes.node,
};

Button.defaultProps = {
    type: 'primary',
    disabled: false,
    busy: false,
    children: null,
};

export default Button;
