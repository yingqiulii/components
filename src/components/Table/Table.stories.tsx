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




import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Table from "./Table";
import { TableProps } from "./Tabel.types";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableHeader from "./TableHeader";
import TableFooter from "./TableFooter";

export default {
  title: "Components/Table",
  component: Table,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: StoryFn<TableProps> = (args) => (
  <>
    <style>
      {`
        table[disabled] td {
          cursor: not-allowed;
        }
      `}
    </style>
    <Table {...args}>
      <TableHeader
        backgroundColor={!args.disabled ? args.backgroundColor : undefined}
      >
        <TableRow>
          <TableCell>Header 1</TableCell>
          <TableCell>Header 2</TableCell>
        </TableRow>
      </TableHeader>
      <TableRow>
        <TableCell>Data 1</TableCell>
        <TableCell>Data 2</TableCell>
      </TableRow>
      <TableFooter>
        <TableRow>
          <TableCell>Footer 1</TableCell>
          <TableCell>Footer 2</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
