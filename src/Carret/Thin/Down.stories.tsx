import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import CarretDown from "./Down";

export default {
  title: "Caret/Thin",
  component: CarretDown,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof CarretDown>;

const Template: ComponentStory<typeof CarretDown> = (args) => {
  return <CarretDown {...args} />;
};

export const Down = Template.bind({});
