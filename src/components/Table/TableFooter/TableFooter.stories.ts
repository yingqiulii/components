import { StoryFn, Meta } from '@storybook/react';
import TableFooter from './TableFooter';
import React from 'react';

export default {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
} as Meta;

const Template: StoryFn<typeof TableFooter> = (args) => React.createElement(TableFooter, { ...args });

export const Default = Template.bind({});
Default.args = {
  children: 'Table Footer',
  backgroundColor: '#f0f0f0', // 设置背景颜色
};


export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled Table Footer',
  disabled: true, // 设置为禁用状态
};

