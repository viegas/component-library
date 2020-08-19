import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './Tag.styles'

const Tag = ({text}) => {
    return (
        <Styled.Wrapper>
            {text}
        </Styled.Wrapper>
    )
}

Tag.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Tag;
