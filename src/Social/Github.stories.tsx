import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import GithubIcon from "./Github";

export default {
  title: "Social/Github",
  component: GithubIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <GithubIcon {...args} />;
};

export const Github = Template.bind({});
