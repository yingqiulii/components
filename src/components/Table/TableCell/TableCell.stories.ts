import { StoryFn, Meta } from '@storybook/react';
import TableCell from './TableCell';
import React from 'react';

export default {
  title: 'Components/Table/TableCell',
  component: TableCell,
} as Meta;

const Template: StoryFn<typeof TableCell> = (args) => React.createElement(TableCell, { ...args });

export const Default = Template.bind({});
Default.args = {
  children: 'Table Cell',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Table Cell',
  disabled: true, // 设置为禁用状态
};


