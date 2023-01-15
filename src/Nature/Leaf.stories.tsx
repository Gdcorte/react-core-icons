import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import LeafIcon from "./Leaf";

export default {
  title: "Nature/Leaf",
  component: LeafIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <LeafIcon {...args} />;
};

export const Leaf = Template.bind({});
