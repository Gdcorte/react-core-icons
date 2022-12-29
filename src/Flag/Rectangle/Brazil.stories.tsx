import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import { IconComponent } from "../../Base/interface";
import { default as BrazilIcon } from "./Brazil";

export default {
  title: "Flags/Rectangle",
  component: BrazilIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<typeof BrazilIcon> = (args) => {
  return <BrazilIcon {...args} />;
};

export const Brazil = Template.bind({});
