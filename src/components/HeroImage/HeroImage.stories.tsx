import React from "react";
import { Story, Meta } from "@storybook/react";
import HeroImage from "./HeroImage";

export default {
  title: "Components/HeroImage",
  component: HeroImage,
  argTypes: {
    disabled: { control: "boolean" },
  },
} as Meta;

const Template: Story = (args) => (
  <HeroImage imageUrl="" altText="" {...args} />
);

export const Default = Template.bind({});
Default.args = {
  imageUrl: "1.jpg",
  altText: "1",
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageUrl: "1.jpg",
  altText: "1",
  disabled: true,
};
