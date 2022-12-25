import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../../.storybook/decorators";
import CarretUp from "./Up";

export default {
  title: "Caret/Double",
  component: CarretUp,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof CarretUp>;

const Template: ComponentStory<typeof CarretUp> = (args) => {
  return <CarretUp {...args} />;
};

export const Up = Template.bind({});
