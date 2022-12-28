import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import DishIcon from "./Dish";

export default {
  title: "Food/Dish",
  component: DishIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <DishIcon {...args} />;
};

export const Dish = Template.bind({});
