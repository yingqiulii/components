
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Dropdown from './Dropdown';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    options: {
      control: 'array',
      description: 'An array of options for the dropdown'
    },
    onSelect: { action: 'selected' },
    disabled: {
      control: 'boolean',
      description: 'Disables the dropdown if true'
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the dropdown'
    }
  }
} as Meta;

const Template: StoryFn<typeof Dropdown> = (args) => React.createElement(Dropdown, {...args});

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  disabled: true,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const dropdownButton = canvas.getByText('Select an option');
  await userEvent.click(dropdownButton);
  const option = canvas.getByText('Option 1');
  await userEvent.click(option);
};


