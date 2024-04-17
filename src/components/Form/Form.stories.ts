import { StoryFn, Meta } from "@storybook/react";
import { Form } from "./Form";
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';

export default {
  title: "Form",
  component: Form,
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'form'
    },
    onSubmit: { action: "submitted" },
  },
} as Meta<typeof Form>;

const Template: StoryFn<typeof Form> = (args) => React.createElement(Form, {...args},
  React.createElement("input", { type: "text", placeholder: "Enter text here" }),
  React.createElement("button", { type: "submit", children: "Submit" })
);

export const Default = Template.bind({});
Default.args = {};


// import React from "react";
// import { Story, Meta } from "@storybook/react";
// import { Form } from "./Form";
// import { Input } from "../Input"; // 确保路径正确

// export default {
//   title: "Form",
//   component: Form,
// } as Meta;

// const Template: Story<typeof Form> = (args) => <Form {...args} />;

// export const DefaultForm = Template.bind({});
// DefaultForm.args = {
//   // 传递Input组件作为Form的子元素
//   children: (
//     <>
//       <Input placeholder="Name" name="name" />
//       <button type="submit">Submit</button>
//     </>
//   ),
//   onSubmit: (e) => {
//     e.preventDefault(); // 阻止表单默认提交事件
//     alert("Form submitted");
//   },
// };
