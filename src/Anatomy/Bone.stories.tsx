import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import BoneIcon from "./Bone";

export default {
  title: "Anatomy/Bone",
  component: BoneIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <BoneIcon {...args} />;
};

export const Bone = Template.bind({});
