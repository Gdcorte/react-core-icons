import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import ReplaceIcon from "./Replace";

export default {
  title: "Symbols/Replace",
  component: ReplaceIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <ReplaceIcon {...args} />;
};

export const Replace = Template.bind({});
