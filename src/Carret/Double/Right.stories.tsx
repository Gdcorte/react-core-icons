import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import CarretRight from "./Right";

export default {
  title: "Caret/Double",
  component: CarretRight,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof CarretRight>;

const Template: ComponentStory<typeof CarretRight> = (args) => {
  return <CarretRight {...args} />;
};

export const Right = Template.bind({});
