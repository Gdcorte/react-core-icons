import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import SaladIcon from "./Salad";

export default {
  title: "Food/Salad",
  component: SaladIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <SaladIcon {...args} />;
};

export const Salad = Template.bind({});
