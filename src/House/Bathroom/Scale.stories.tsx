import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import { IconComponent } from "../../Base/interface";
import ScaleIcon from "./Scale";

export default {
  title: "House/Bathroom",
  component: ScaleIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <ScaleIcon {...args} />;
};

export const Scale = Template.bind({});
