import React from 'react';
import PropTypes from 'prop-types';

import * as Styled from './Loader.styles';

export const config = {
    sm: {
        size: 20,
        strokeWidth: 1,
    },
    md: {
        size: 30,
        strokeWidth: 2,
    },
    lg: {
        size: 50,
        strokeWidth: 3,
    },
    xl: {
        size: 80,
        strokeWidth: 4,
    },
    xxl: {
        size: 100,
        strokeWidth: 6,
    },
};

const Loader = ({ color, size }) => {
    const options = config[size];

    return <Styled.Spinner {...options} color={color} />;
};

Loader.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    color: PropTypes.string,
};

Loader.defaultProps = {
    size: 'sm',
    color: 'blue',
};
export default Loader;
