
import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";
import { userEvent, within } from '@storybook/test';

export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

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

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole('button', { name: /Primary Button/i }));
};