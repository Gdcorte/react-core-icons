import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import EyeIcon from "./Eye";

export default {
  title: "Anatomy/Eye",
  component: EyeIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <EyeIcon {...args} />;
};

export const Eye = Template.bind({});
