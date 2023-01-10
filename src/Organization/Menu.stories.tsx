import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import MenuIcon from "./Menu";

export default {
  title: "Organization/Menu",
  component: MenuIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <MenuIcon {...args} />;
};

export const Menu = Template.bind({});
