import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import UserIcon from "./User";

export default {
  title: "Symbols/User",
  component: UserIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <UserIcon {...args} />;
};

export const User = Template.bind({});
