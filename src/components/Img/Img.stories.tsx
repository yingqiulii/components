

// import React from 'react';
// import { Story, Meta } from '@storybook/react';
// import Img from './Img';

// export default {
//   title: 'Components/Img',
//   component: Img,
//   argTypes: {
//     disabled: {
//       control: 'boolean',
//     },
//   },
// } as Meta;

// const Template: Story = (args) => <Img src={''} alt={''} {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   src: '1.jpg',
//   alt: 'Placeholder',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   src: '1.jpg',
//   alt: 'Placeholder',
//   disabled: true,
// };
import React from 'react';
import { Story, Meta } from '@storybook/react';
import Img from './Img';

export default {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story = (args) => <Img src={''} alt={''} {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '1.jpg',
  alt: '1',
};

export const Disabled = Template.bind({});
Disabled.args = {
  src: '1.jpg',
  alt: '1',
  disabled: true,
};
