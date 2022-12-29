import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import TripleGear from "./Triple";

export default {
  title: "Tools/Gear",
  component: TripleGear,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof TripleGear>;

const Template: ComponentStory<typeof TripleGear> = (args) => {
  return <TripleGear {...args} />;
};

export const Triple = Template.bind({});
