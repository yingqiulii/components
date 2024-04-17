import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Text from './Text';
import { TextProps } from './Text.types';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text content to display'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the text if true'
    },
    largeFont: {
      control: 'boolean',
      description: 'Uses a larger font size if true'
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the text'
    }
  }
} as Meta;

const Template: StoryFn<Partial<TextProps>> = (args) => React.createElement(Text, {...args, children: args.text});

export const Default = Template.bind({});
Default.args = {
  text: 'Default Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Disabled Text',
  disabled: true,
};

export const LargeFont = Template.bind({});
LargeFont.args = {
  text: 'Large Font Text',
  largeFont: true,
};
