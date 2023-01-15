import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import BreadIcon from "./Bread";

export default {
  title: "Food/Bread",
  component: BreadIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <BreadIcon {...args} />;
};

export const Bread = Template.bind({});
