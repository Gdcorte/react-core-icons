import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../../.storybook/decorators";
import { IconComponent } from "../../Base/interface";
import DarkIcon from "./Dark";

export default {
  title: "House/Bulb",
  component: DarkIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <DarkIcon {...args} />;
};

export const Dark = Template.bind({});
