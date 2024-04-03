// import React from "react";
// import { StoryFn, Meta } from "@storybook/react";
// import Card from "./Card";

// export default {
//   title: "Components/Card",
//   component: Card,
// } as Meta;


// const Template: StoryFn<typeof Card> = (args) => (
//   <Card {...args}>
//     <h2>{args.disabled ? "Disabled Card" : args.title}</h2>
//     <p>{args.disabled ? "This card is disabled" : args.content}</p>
//   </Card>
// );

// export const Default = Template.bind({});
// Default.args = {
//   title: "Card Title",
//   content: "Card Content",
//   imageUrl: "/1.jpg",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   title: "Disabled Card",
//   content: "This card is disabled",
//   disabled: true,
//   imageUrl: "/1.jpg",
// };
import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

const Template: StoryFn<typeof Card> = (args) => (
  <Card {...args}>
    <h2>{args.disabled ? 'Disabled Card' : args.title}</h2>
    <p>{args.disabled ? 'This card is disabled' : args.content}</p>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'Card Content',
  imageUrl: '/1.jpg',
};
// Add play function for Default Story
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Simulate user interaction, e.g., clicking on the card
  // In this case, it's just an example, as there's no specific action defined for a click in this setup
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled',
  disabled: true,
  imageUrl: '/1.jpg',
};
// Add play function for Disabled Story
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  // Here, you could test if the card correctly shows its disabled state
  // Since the card's behavior on interaction isn't detailed, we'll assume it's just for demonstration
};
