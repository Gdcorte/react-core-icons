import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../../.storybook/decorators";
import { IconComponent } from "../../Base/interface";
import { default as ChinaIcon } from "./China";

export default {
  title: "Flags/Round",
  component: ChinaIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<typeof ChinaIcon> = (args) => {
  return <ChinaIcon {...args} />;
};

export const China = Template.bind({});
