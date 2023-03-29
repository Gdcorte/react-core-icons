import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import FacebookIcon from "./Facebook";

export default {
  title: "Social/Facebook",
  component: FacebookIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <FacebookIcon {...args} />;
};

export const Facebook = Template.bind({});
