import React from 'react';
import { text } from '@storybook/addon-knobs';

import Tag from './Tag';

export default {
    title: 'Components',
};

export const TagStory = () => {
    return <Tag text={text('Tag text', 'Some text')} />;
};

TagStory.story = {
    name: '<Tag />',
};


TagStory.parameters = {
  jest: 'Tag.test.js',
};