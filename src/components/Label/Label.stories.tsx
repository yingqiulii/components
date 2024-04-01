import { StoryFn, Meta } from "@storybook/react";
import Label from "./Label";
import { LabelProps } from "./Label.types";


export default {
  title: "Components/Label",
  component: Label,
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Default Label",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Label",
  disabled: true,
};
