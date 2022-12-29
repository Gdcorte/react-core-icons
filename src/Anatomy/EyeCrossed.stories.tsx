import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import EyeCrossedIcon from "./EyeCrossed";

export default {
  title: "Anatomy/EyeCrossed",
  component: EyeCrossedIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <EyeCrossedIcon {...args} />;
};

export const EyeCrossed = Template.bind({});
