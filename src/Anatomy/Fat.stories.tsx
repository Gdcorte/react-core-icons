import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import FatIcon from "./Fat";

export default {
  title: "Anatomy/Fat",
  component: FatIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <FatIcon {...args} />;
};

export const Fat = Template.bind({});
