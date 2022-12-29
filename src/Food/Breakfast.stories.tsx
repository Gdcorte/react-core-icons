import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import BreakfastIcon from "./Breakfast";

export default {
  title: "Food/Breakfast",
  component: BreakfastIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <BreakfastIcon {...args} />;
};

export const Breakfast = Template.bind({});
