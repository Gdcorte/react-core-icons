import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import RiceIcon from "./Rice";

export default {
  title: "Food/Rice",
  component: RiceIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <RiceIcon {...args} />;
};

export const Rice = Template.bind({});
