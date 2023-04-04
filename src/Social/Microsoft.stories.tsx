import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import MicrosoftIcon from "./Microsoft";

export default {
  title: "Social/Microsoft",
  component: MicrosoftIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <MicrosoftIcon {...args} />;
};

export const Microsoft = Template.bind({});
