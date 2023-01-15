import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import { IconComponent } from "../../Base/interface";
import PotIcon from "./Pot";

export default {
  title: "House/Kitchen",
  component: PotIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <PotIcon {...args} />;
};

export const Pot = Template.bind({});
