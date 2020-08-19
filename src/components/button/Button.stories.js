import React from 'react';
import { text, boolean, select } from '@storybook/addon-knobs';

import Button from './Button';

export default {
    title: 'Components',
};

export const ButtonStory = () => {
    const types = ['primary', 'secondary'];

    const props = {
        type: select('Type', types, types[0]),
        disabled: boolean('Disabled', false),
        busy: boolean('Busy', false),
    };

    return <Button {...props}>{text('Label', 'Button')}</Button>;
};

ButtonStory.story = {
    name: '<Button />',
};


ButtonStory.parameters = {
  jest: 'Button.test.js',
};