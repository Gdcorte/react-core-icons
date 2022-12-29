import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import { IconComponent } from "../../Base/interface";
import LightIcon from "./Light";

export default {
  title: "House/Bulb",
  component: LightIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <LightIcon {...args} />;
};

export const Light = Template.bind({});
