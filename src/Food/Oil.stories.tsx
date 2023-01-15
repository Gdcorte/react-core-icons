import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import OilIcon from "./Oil";

export default {
  title: "Food/Oil",
  component: OilIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <OilIcon {...args} />;
};

export const Oil = Template.bind({});
