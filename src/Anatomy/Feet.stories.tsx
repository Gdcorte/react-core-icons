import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import FeetIcon from "./Feet";

export default {
  title: "Anatomy/Feet",
  component: FeetIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <FeetIcon {...args} />;
};

export const Feet = Template.bind({});
