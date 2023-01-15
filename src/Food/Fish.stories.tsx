import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import FishIcon from "./Fish";

export default {
  title: "Food/Fish",
  component: FishIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <FishIcon {...args} />;
};

export const Fish = Template.bind({});
