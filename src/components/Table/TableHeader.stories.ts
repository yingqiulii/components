// TableHeader.stories.tsx

import { StoryFn, Meta } from '@storybook/react';
import TableHeader from './TableHeader';
import React from 'react';

export default {
  title: 'Components/Table/TableHeader',
  component: TableHeader,
} as Meta;

const Template: StoryFn<typeof TableHeader> = (args) =>  React.createElement(TableHeader, { ...args });

export const Default = Template.bind({});
Default.args = {
  children: 'Table Header',
};

