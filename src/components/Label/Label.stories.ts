import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Label from './Label';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text displayed in the label'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the label if true'
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the label'
    }
  }
} as Meta;

const Template: StoryFn<typeof Label> = (args) => React.createElement(Label, {...args});

export const Default = Template.bind({});
Default.args = {
  text: 'Default Label',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Label',
  disabled: true,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const labelElement = canvas.getByText('Default Label');
  await userEvent.click(labelElement);
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const labelElement = canvas.getByText('Disabled Label');
  await userEvent.click(labelElement);
};
 