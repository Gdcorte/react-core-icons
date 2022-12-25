import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../../.storybook/decorators";
import CarretLeft from "./Left";

export default {
  title: "Caret/Thin",
  component: CarretLeft,
  decorators: [BoxedDecorator],
} as ComponentMeta<typeof CarretLeft>;

const Template: ComponentStory<typeof CarretLeft> = (args) => {
  return <CarretLeft {...args} />;
};

export const Left = Template.bind({});
