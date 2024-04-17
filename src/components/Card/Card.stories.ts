import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card from './Card';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    title: {
      control: 'text',
      description: 'The title of the card'
    },
    content: {
      control: 'text',
      description: 'The content of the card'
    },
    imageUrl: {
      control: 'text',
      description: 'Image URL for the card image'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the card if true'
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color for the card'
    }
  }
} as Meta;

const Template: StoryFn<typeof Card> = (args) => React.createElement(Card, {...args});

export const Default = Template.bind({});
Default.args = {
  title: 'Card Title',
  content: 'Card Content',
  imageUrl: '/1.jpg',
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: 'Disabled Card',
  content: 'This card is disabled',
  disabled: true,
  imageUrl: '/1.jpg',
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cardElement = canvas.getByText('Card Title');
  await userEvent.click(cardElement);
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const cardElement = canvas.getByText('Disabled Card');
  await userEvent.click(cardElement);
};


// import React from 'react';
// import { StoryFn, Meta } from '@storybook/react';
// import Card from './Card';
// import { within, userEvent } from '@storybook/testing-library';

// export default {
//   title: 'Components/Card',
//   component: Card,
//   argTypes: {
//     title: {
//       control: 'text',
//       description: 'The title of the card'
//     },
//     content: {
//       control: 'text',
//       description: 'The content of the card'
//     },
//     imageUrl: {
//       control: 'text',
//       description: 'Image URL for the card image'
//     },
//     disabled: {
//       control: 'boolean',
//       description: 'Disables the card if true'
//     },
//     backgroundColor: {
//       control: 'color', // 这允许用户在 Storybook 中选择颜色
//       description: 'Background color for the card'
//     }
//   }
// } as Meta;

// const Template: StoryFn<typeof Card> = (args) => (
//   <Card {...args} />
// );

// export const Default = Template.bind({});
// Default.args = {
//   title: 'Card Title',
//   content: 'Card Content',
//   imageUrl: '/1.jpg',
// };

// export const Disabled = Template.bind({});
// Disabled.args = {
//   title: 'Disabled Card',
//   content: 'This card is disabled',
//   disabled: true,
//   imageUrl: '/1.jpg',
// };

// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const cardElement = canvas.getByText('Card Title');
//   await userEvent.click(cardElement);
// };

// Disabled.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const cardElement = canvas.getByText('Disabled Card');
//   await userEvent.click(cardElement);
// };

// import React from 'react';
// import { StoryFn, Meta } from '@storybook/react';
// import Card from './Card';
// import { within, userEvent } from '@storybook/testing-library';

// export default {
//   title: 'Components/Card',
//   component: Card,
// } as Meta;

// const Template: StoryFn<typeof Card> = (args) => (
//   <Card {...args}>
//     <h2>{args.disabled ? 'Disabled Card' : args.title}</h2>
//     <p>{args.disabled ? 'This card is disabled' : args.content}</p>
//   </Card>
// );

// export const Default = Template.bind({});
// Default.args = {
//   title: 'Card Title',
//   content: 'Card Content',
//   imageUrl: '/1.jpg',
// };


// export const Disabled = Template.bind({});
// Disabled.args = {
//   title: 'Disabled Card',
//   content: 'This card is disabled',
//   disabled: true,
//   imageUrl: '/1.jpg',
// };

// Default.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const cardElement = canvas.getByText('Card Title');
//   await userEvent.click(cardElement);
// };

// Disabled.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);
//   const cardElement = canvas.getByText('Disabled Card');
//   await userEvent.click(cardElement);
// };
