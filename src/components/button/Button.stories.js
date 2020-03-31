import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import Button from './Button';

storiesOf('Components', module).add('<Button />', () => {
    const types = ['primary', 'secondary'];

    const props = {
        type: select('Type', types, types[0]),
        disabled: boolean('Disabled', false),
        busy: boolean('Busy', false),
    };

    return <Button {...props}>{text('Label', 'Button')}</Button>;
});
