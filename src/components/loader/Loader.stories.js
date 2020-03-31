import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';

import Loader, { config } from './Loader';

import theme from '../../theme';
const colors = Object.keys(theme.colors);
const sizes = Object.keys(config);

storiesOf('Components', module).add('<Loader />', () => {
    const size = select('Loader Size', sizes, 'lg');
    const color = select('Color', colors, colors[0]);

    return <Loader size={size} color={color} />;
});
