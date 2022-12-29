import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import LegIcon from "./Leg";

export default {
  title: "Anatomy/Leg",
  component: LegIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <LegIcon {...args} />;
};

export const Leg = Template.bind({});
