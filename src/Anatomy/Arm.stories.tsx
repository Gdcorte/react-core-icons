import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import ArmIcon from "./Arm";

export default {
  title: "Anatomy/Arm",
  component: ArmIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <ArmIcon {...args} />;
};

export const Arm = Template.bind({});
