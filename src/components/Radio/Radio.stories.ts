import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Radio from './Radio';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    label: {
      control: 'text',
      description: 'The label text for the radio button'
    },
    onChange: { action: 'changed' },
    disabled: {
      control: 'boolean',
      description: 'Disables the radio button if true'
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the radio button'
    }
  }
} as Meta;

const Template: StoryFn<typeof Radio> = (args) => React.createElement(Radio, {...args});

export const Default = Template.bind({});
Default.args = {
  label: 'Default Radio',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Radio',
  disabled: true,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radioElement = canvas.getByText('Default Radio');
  await userEvent.click(radioElement);
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const radioElement = canvas.getByText('Disabled Radio');
  await userEvent.click(radioElement);
};
