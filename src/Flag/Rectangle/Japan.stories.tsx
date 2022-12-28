import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../../.storybook/decorators";
import { IconComponent } from "../../Base/interface";
import { default as JapanIcon } from "./Japan";

export default {
  title: "Flags/Rectangle",
  component: JapanIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<typeof JapanIcon> = (args) => {
  return <JapanIcon {...args} />;
};

export const Japan = Template.bind({});