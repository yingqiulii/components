import { StoryFn } from "@storybook/react";
import HeroImage from "./HeroImage";
import React from 'react';

export default {
  title: "HeroImage",
  component: HeroImage,
  argTypes: {
    imageUrl: {
      control: 'text',
      description: 'The URL of the image to be displayed'
    },
    altText: {
      control: 'text',
      description: 'The alternate text for the image'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the hero image if true'
    },
    backgroundColor: {
      control: 'color',
      description: 'Custom background color for the hero image container'
    }
  },
};

const Template: StoryFn<typeof HeroImage> = (args) => React.createElement(HeroImage, {...args});

export const Default = Template.bind({});
Default.args = {
  imageUrl: "./1.jpg",
  altText: "Placeholder Image",
};

export const Disabled = Template.bind({});
Disabled.args = {
  imageUrl: "./1.jpg",
  altText: "Placeholder Image",
  disabled: true,
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  imageUrl: "./1.jpg",
  altText: "Placeholder Image",
  backgroundColor: "#f0f0f0",
};

// import React from "react";
// import { Story, Meta } from "@storybook/react";
// import HeroImage from "./HeroImage";

// export default {
//   title: "Components/HeroImage",
//   component: HeroImage,
//   argTypes: {
//     disabled: { control: "boolean" },
//   },
// } as Meta;

// const Template: Story = (args) => (
//   <HeroImage imageUrl="" altText="" {...args} />
// );

// export const Default = Template.bind({});
// Default.args = {
//   imageUrl: "1.jpg",
//   altText: "1",
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   imageUrl: "1.jpg",
//   altText: "1",
//   disabled: true,
// };