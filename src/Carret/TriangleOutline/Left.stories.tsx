import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import CarretLeft from "./Left";

export default {
  title: "Caret/Triangle/Outline",
  component: CarretLeft,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof CarretLeft>;

const Template: ComponentStory<typeof CarretLeft> = (args) => {
  return <CarretLeft {...args} />;
};

export const Left = Template.bind({});
