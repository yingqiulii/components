import React from "react";
import { Story, Meta } from "@storybook/react";

import Dropdown from "./Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    onSelect: { action: "selected" },
  },
} as Meta;

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args} onSelect={args.onSelect || (() => {})} />
);

// export const Default = Template.bind({});
// Default.args = {
//   options: ['Option 1', 'Option 2', 'Option 3'],
//   onSelect: (option) => console.log(`Selected option: ${option}`),
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   options: ['Option 1', 'Option 2', 'Option 3'],
//   onSelect: (option) => console.log(`Selected option: ${option}`),
//   disabled: true,
// };
export const Default = Template.bind({});
Default.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  onSelect: (option) => console.log(`Selected option: ${option}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ["Option 1", "Option 2", "Option 3"],
  onSelect: (option) => console.log(`Selected option: ${option}`),
  disabled: true,
};
