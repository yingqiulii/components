import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Img from './Img';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL'
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image'
    },
    width: {
      control: 'text',
      description: 'Width of the image'
    },
    height: {
      control: 'text',
      description: 'Height of the image'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the image if true'
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the image'
    }
  }
} as Meta;

const Template: StoryFn<typeof Img> = (args) => React.createElement(Img, {...args});

export const Default = Template.bind({});
Default.args = {
  src: '/1.jpg',
  alt: 'Example Image',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: '/1.jpg',
  alt: 'Disabled Image',
  disabled: true,
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  src: '/1.jpg',
  alt: 'Image with Background Color',
  backgroundColor: '#CCCCCC',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = canvas.getByAltText('Example Image');
  await userEvent.click(imgElement);
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = canvas.getByAltText('Disabled Image');
  await userEvent.click(imgElement);
};

WithBackgroundColor.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imgElement = canvas.getByAltText('Image with Background Color');
  await userEvent.click(imgElement);
};
