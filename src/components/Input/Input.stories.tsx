// import React from 'react';
// import { Story, Meta } from '@storybook/react';
// import { Input } from './Input';

// export default {
//   title: 'Input',
//   component: Input,
//   argTypes: {
//     placeholder: { control: 'text' },
//     disabled: { control: 'boolean' },
//   },
// } as Meta;

// const Template: Story = (args) => <Input {...args} />;

// export const DefaultInput = Template.bind({});
// DefaultInput.args = {
//   placeholder: 'Type here...',
//   disabled: false,
// };

// export const DisabledInput = Template.bind({});
// DisabledInput.args = {
//   ...DefaultInput.args,
//   disabled: true,
// };
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: { control: 'text' },
    name: { control: 'text' }, // 添加name属性的控制
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story = (args) => <Input name={''} {...args} />;

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  name: 'defaultInput', // 提供name属性的值
  placeholder: 'Type here...',
  disabled: false,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  ...DefaultInput.args,
  name: 'disabledInput', // 确保每个故事都提供name属性的值
  disabled: true,
};
