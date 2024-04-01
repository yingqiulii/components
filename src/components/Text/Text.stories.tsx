import React from "react";
import { Story, Meta } from "@storybook/react";
import Text from "./Text";

export default {
  title: "Text",
  component: Text,
} as Meta;

const Template: Story<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "sapce",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "sapce",
  disabled: true,
};
