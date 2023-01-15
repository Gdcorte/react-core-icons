import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import EggIcon from "./Egg";

export default {
  title: "Food/Egg",
  component: EggIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <EggIcon {...args} />;
};

export const Egg = Template.bind({});
