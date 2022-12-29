import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import EnergyIcon from "./Energy";

export default {
  title: "Nature/Energy",
  component: EnergyIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <EnergyIcon {...args} />;
};

export const Energy = Template.bind({});
