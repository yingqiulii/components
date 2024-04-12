// import React from "react";
// import { Story, Meta } from "@storybook/react";

// import Dropdown from "./Dropdown";

// export default {
//   title: "Components/Dropdown",
//   component: Dropdown,
//   argTypes: {
//     onSelect: { action: "selected" },
//   },
// } as Meta;

// const Template: Story<DropdownProps> = (args) => (
//   <Dropdown {...args} onSelect={args.onSelect || (() => {})} />
// );

// export const Default = Template.bind({});
// Default.args = {
//   options: ["Option 1", "Option 2", "Option 3"],
//   onSelect: (option) => console.log(`Selected option: ${option}`),
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   options: ["Option 1", "Option 2", "Option 3"],
//   onSelect: (option) => console.log(`Selected option: ${option}`),
//   disabled: true,
// };
import React from "react";
import { Story, Meta } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";

import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    onSelect: { action: "selected" },
  },
} as Meta;

const Template: Story<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  onSelect: (option) => console.log(`Selected option: ${option}`),
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdownButton = canvas.getByRole('button');
  await userEvent.click(dropdownButton);
  await userEvent.click(canvas.getByText('Option 1'));
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  disabled: true,
  onSelect: (option) => console.log(`Selected option: ${option}`),
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdownButton = canvas.getByRole('button');
  await userEvent.click(dropdownButton);
};

