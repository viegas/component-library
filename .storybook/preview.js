import '../src/stylesheet';
import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withTests } from '@storybook/addon-jest';
import { addParameters } from '@storybook/react';

import withThemeProvider from './withThemeProvider';
import results from '../.jest-test-results.json';

addParameters({
    grid: { cellSize: 10 },
    backgrounds: [
        { name: 'white', value: '#ffffff' },
        { name: 'black', value: '#000000' },
        { name: 'neutral', value: '#bbbbbb' },
        { name: 'light-neutral', value: '#e4e4e4' },
    ],
    
});

addDecorator(withThemeProvider);
addDecorator(withKnobs);

addDecorator(withTests({ results }));
