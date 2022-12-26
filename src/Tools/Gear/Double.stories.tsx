import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../../.storybook/decorators";
import DoubleGear from "./Double";

export default {
  title: "Tools/Gear",
  component: DoubleGear,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof DoubleGear>;

const Template: ComponentStory<typeof DoubleGear> = (args) => {
  return <DoubleGear {...args} />;
};

export const Double = Template.bind({});
