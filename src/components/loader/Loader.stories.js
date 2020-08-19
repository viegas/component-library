import React from 'react';
import { select } from '@storybook/addon-knobs';

import Loader, { config } from './Loader';

import theme from '../../theme';

const colors = Object.keys(theme.colors);
const sizes = Object.keys(config);

export default {
    title: 'Components',
};

export const LoaderStory = () => {
    const size = select('Loader Size', sizes, 'lg');
    const color = select('Color', colors, 'blue');

    return <Loader size={size} color={color} />;
};

LoaderStory.story = {
    name: '<Loader />',
};

LoaderStory.parameters = {
    jest: 'Loader.test.js',
};
