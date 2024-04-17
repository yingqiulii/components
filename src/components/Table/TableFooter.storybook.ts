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
};
