// import React from 'react';
// import { StoryFn, Meta } from "@storybook/react";
// import Table from './Table';
// import { TableProps } from "./Tabel.types";
// import TableRow from './TableRow';
// import TableCell from './TableCell';
// import TableHeader from './TableHeader';
// import TableFooter from './TableFooter';

// export default {
//   title: 'Components/Table',
//   component: Table,
// } as Meta;

// const Template: StoryFn<TableProps>= (args) => (
//   <Table {...args}>
//     <TableHeader>
//       <TableRow>
//         <TableCell>Header 1</TableCell>
//         <TableCell>Header 2</TableCell>
//       </TableRow>
//     </TableHeader>
//     <TableRow>
//       <TableCell>Data 1</TableCell>
//       <TableCell>Data 2</TableCell>
//     </TableRow>
//     <TableFooter>
//       <TableRow>
//         <TableCell>Footer 1</TableCell>
//         <TableCell>Footer 2</TableCell>
//       </TableRow>
//     </TableFooter>
//   </Table>
// );

// export const Default = Template.bind({});
// Default.args = {};

// export const Disabled = Template.bind({});
// Disabled.args = { disabled: true };

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Table from './Table';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    categories: {
      control: 'array',
      description: 'An array of category names for the table'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the table if true'
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the table'
    }
  }
} as Meta;

const Template: StoryFn<typeof Table> = (args) => React.createElement(Table, { ...args });

export const Default = Template.bind({});
Default.args = {
  categories: ['Category 1', 'Category 2', 'Category 3'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  categories: ['Disabled Category 1', 'Disabled Category 2', 'Disabled Category 3'],
  disabled: true,
  backgroundColor: 'transparent',
};

// Play functions to simulate interactions in Storybook
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const categoryRow = canvas.getByText('Category 1').parentElement as HTMLElement;
  await userEvent.click(categoryRow);
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const disabledCategoryRow = canvas.getByText('Disabled Category 1').parentElement as HTMLElement;
  await userEvent.click(disabledCategoryRow);
};



