import { StoryFn, Meta } from '@storybook/react';
import React from 'react';
import TableRow from './TableRow';

export default {
  title: 'Components/Table/TableRow',
  component: TableRow,
} as Meta;

const Template: StoryFn<typeof TableRow> = (args) =>  React.createElement(TableRow, { ...args });

export const Default = Template.bind({});
Default.args = {
  children: 'TableRow',
};
