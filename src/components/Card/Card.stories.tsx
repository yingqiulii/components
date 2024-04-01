import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

// const Template: StoryFn<typeof Card> = (args) => <Card {...args} />;
const Template: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <h2>{args.disabled ? "Disabled Card" : args.title}</h2>
    <p>{args.disabled ? "This card is disabled" : args.content}</p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  title: "Card Title",
  content: "Card Content",
  imageUrl: "/1.jpg",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled Card",
  content: "This card is disabled",
  disabled: true,
  imageUrl: "/1.jpg",
};
