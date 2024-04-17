import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import { userEvent, within } from '@storybook/testing-library';
import React from 'react';

export default {
  title: "Button",
  component: Button,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text displayed on the button'
    },
    theme: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description: 'The theme of the button',
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the button'
    },
    onClick: { action: "clicked" },
    disabled: {
      control: 'boolean',
      description: 'Disables the button if true'
    }
  },
} as Meta;

const Template: StoryFn<typeof Button> = (args) => React.createElement(Button, {...args});

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary Button",
  theme: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary Button",
  theme: "secondary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Button",
  disabled: true,
};

// Play functions to simulate interactions in Storybook
Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /Primary Button/i });
  await userEvent.click(button);
};

Secondary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /Secondary Button/i });
  await userEvent.click(button);
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /Disabled Button/i });
  await userEvent.click(button);
};

// import { StoryFn, Meta } from "@storybook/react";
// import Button from "./Button";
// import { userEvent, within } from '@storybook/testing-library';

// export default {
//   title: "Button",
//   component: Button,
//   argTypes: {
//     text: {
//       control: 'text',
//       description: 'The text displayed on the button'
//     },
//     theme: {
//       control: { type: 'radio' },
//       options: ['primary', 'secondary'],
//       description: 'The theme of the button',
//     },
//     backgroundColor: {
//       control: 'color',
//       description: 'Custom background color for the button'
//     },
//     onClick: { action: "clicked" },
//     disabled: {
//       control: 'boolean',
//       description: 'Disables the button if true'
//     }
//   },
// } as Meta;

// const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   text: "Primary Button",
//   theme: "primary",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   text: "Secondary Button",
//   theme: "secondary",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   text: "Disabled Button",
//   disabled: true,
// };

// // Play functions to simulate interactions in Storybook
// Primary.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const button = canvas.getByRole('button', { name: /Primary Button/i });
//   await userEvent.click(button);
// };

// Secondary.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const button = canvas.getByRole('button', { name: /Secondary Button/i });
//   await userEvent.click(button);
// };

// Disabled.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const button = canvas.getByRole('button', { name: /Disabled Button/i });
//   await userEvent.click(button);
// };


// import { StoryFn, Meta } from "@storybook/react";
// import Button from "./Button";
// import { userEvent, within } from '@storybook/testing-library';

// export default {
//   title: "Button",
//   component: Button,
//   argTypes: {
//     onClick: { action: "clicked" },
//   },
// } as Meta;

// const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   text: "Primary Button",
//   theme: "primary",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   text: "Secondary Button",
//   theme: "secondary",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   text: "Disabled Button",
//   disabled: true,
// };

// Primary.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const button = canvas.getByRole('button', { name: /Primary Button/i });
//   await userEvent.click(button);
// };

// Secondary.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const button = canvas.getByRole('button', { name: /Secondary Button/i });
//   await userEvent.click(button);
// };

// Disabled.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const button = canvas.getByRole('button', { name: /Disabled Button/i });
//   await userEvent.click(button);
// };
