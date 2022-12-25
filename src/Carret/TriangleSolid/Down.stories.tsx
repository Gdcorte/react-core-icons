import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../../.storybook/decorators";
import CarretDown from "./Down";

export default {
  title: "Caret/Triangle/Solid",
  component: CarretDown,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof CarretDown>;

const Template: ComponentStory<typeof CarretDown> = (args) => {
  return <CarretDown {...args} />;
};

export const Down = Template.bind({});
