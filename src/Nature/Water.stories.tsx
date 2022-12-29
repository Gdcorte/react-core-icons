import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import WaterIcon from "./Water";

export default {
  title: "Nature/Water",
  component: WaterIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <WaterIcon {...args} />;
};

export const Water = Template.bind({});
