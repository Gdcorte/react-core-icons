import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import FireIcon from "./Fire";

export default {
  title: "Nature/Fire",
  component: FireIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <FireIcon {...args} />;
};

export const Fire = Template.bind({});
