import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import HeartIcon from "./Heart";

export default {
  title: "Anatomy/Heart",
  component: HeartIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <HeartIcon {...args} />;
};

export const Heart = Template.bind({});
