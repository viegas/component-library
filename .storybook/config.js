import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import withThemeProvider from './withThemeProvider';

import '../src/stylesheet';


addDecorator(withThemeProvider);
addDecorator(withKnobs);
