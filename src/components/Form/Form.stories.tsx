// import React from 'react';
// import { Story, Meta } from '@storybook/react';
// import { Form } from './Form';
// import { Input } from '../Input'; // 假设Input组件在同一个目录

// export default {
//   title: 'Form',
//   component: Form,
// } as Meta;

// const Template: Story = (args) => <Form children={undefined} onSubmit={function (e: React.FormEvent<HTMLFormElement>): void {
//   throw new Error('Function not implemented.');
// } } {...args} />;

// export const DefaultForm = Template.bind({});
// DefaultForm.args = {
//   children: <Input placeholder="Type something..." />,
//   onSubmit: (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     alert('Form submitted');
//   },
// };
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Form } from './Form';
import { Input } from '../Input'; // 确保路径正确

export default {
  title: 'Form',
  component: Form,
} as Meta;

const Template: Story<typeof Form> = (args) => <Form {...args} />;

export const DefaultForm = Template.bind({});
DefaultForm.args = {
  // 传递Input组件作为Form的子元素
  children: (
    <>
      <Input placeholder="Name" name="name" />
      <button type="submit">Submit</button>
    </>
  ),
  onSubmit: (e) => {
    e.preventDefault(); // 阻止表单默认提交事件
    alert('Form submitted');
  },
};
