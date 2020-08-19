import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Tag from './Tag';

storiesOf('Components', module).add('<Tag />', () => {
    return <Tag text={text('Tag text', 'Some text')} />;
});
