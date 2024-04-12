
import React from "react";
import { Story, Meta } from "@storybook/react";
import { Input } from "./Input";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    name: { control: "text" },
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story = (args) => <Input name={""} {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  name: "defaultInput",
  placeholder: "Type here...",
  disabled: false,
  'data-testid': "default-input",
};


DefaultInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByTestId('default-input');
  await userEvent.hover(inputElement);
  await userEvent.type(inputElement, 'Hello, Storybook!');
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  ...DefaultInput.args,
  name: "disabledInput",
  disabled: true,
  'data-testid': "disabled-input",
};


DisabledInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByTestId('disabled-input');
  await userEvent.hover(inputElement);
};
