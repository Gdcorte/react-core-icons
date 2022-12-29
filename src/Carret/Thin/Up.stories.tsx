import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import CarretUp from "./Up";

export default {
  title: "Caret/Thin",
  component: CarretUp,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof CarretUp>;

const Template: ComponentStory<typeof CarretUp> = (args) => {
  return <CarretUp {...args} />;
};

export const Up = Template.bind({});
