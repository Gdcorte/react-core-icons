import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import SingleGear from "./Single";

export default {
  title: "Tools/Gear",
  component: SingleGear,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof SingleGear>;

const Template: ComponentStory<typeof SingleGear> = (args) => {
  return <SingleGear {...args} />;
};

export const Single = Template.bind({});
