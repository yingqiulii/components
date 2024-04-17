import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {Input} from './Input';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    value: {
      control: 'text',
      description: 'The value of the input'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the input if true'
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the input'
    }
  }
} as Meta;

const Template: StoryFn<typeof Input> = (args) => React.createElement(Input, {...args});

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text here',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Disabled input',
  disabled: true,
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  placeholder: 'Input with Background Color',
  backgroundColor: '#CCCCCC',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByPlaceholderText('Enter text here');
  await userEvent.type(inputElement, 'Hello, world!');
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByPlaceholderText('Disabled input');
  await userEvent.click(inputElement);
};

WithBackgroundColor.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputElement = canvas.getByPlaceholderText('Input with Background Color');
  await userEvent.type(inputElement, 'Hello, world!');
};



// import React from "react";
// import { Story, Meta } from "@storybook/react";
// import { Input } from "./Input";
// import { userEvent, within } from "@storybook/testing-library";

// export default {
//   title: "Input",
//   component: Input,
//   argTypes: {
//     placeholder: { control: "text" },
//     name: { control: "text" },
//     disabled: { control: "boolean" },
//   },
// } as Meta;

// const Template: Story = (args) => <Input name={""} {...args} />;

// export const DefaultInput = Template.bind({});
// DefaultInput.args = {
//   name: "defaultInput",
//   placeholder: "Type here...",
//   disabled: false,
//   'data-testid': "default-input",
// };


// DefaultInput.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const inputElement = canvas.getByTestId('default-input');
//   await userEvent.hover(inputElement);
//   await userEvent.type(inputElement, 'Hello, Storybook!');
// };

// export const DisabledInput = Template.bind({});
// DisabledInput.args = {
//   ...DefaultInput.args,
//   name: "disabledInput",
//   disabled: true,
//   'data-testid': "disabled-input",
// };


// DisabledInput.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const inputElement = canvas.getByTestId('disabled-input');
//   await userEvent.hover(inputElement);
// };
