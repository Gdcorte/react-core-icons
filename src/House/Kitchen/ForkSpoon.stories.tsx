import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import { IconComponent } from "../../Base/interface";
import ForkSpoonIcon from "./ForkSpoon";

export default {
  title: "House/Kitchen",
  component: ForkSpoonIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <ForkSpoonIcon {...args} />;
};

export const ForkSpoon = Template.bind({});
