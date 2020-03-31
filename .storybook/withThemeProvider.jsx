import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../src/theme'


const withThemeProvider = storyFn => (
    <ThemeProvider theme={theme}>
        {storyFn()}
    </ThemeProvider>
);

export default withThemeProvider;
