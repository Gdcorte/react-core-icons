import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import RecipeIcon from "./Recipe";

export default {
  title: "Food/Recipe",
  component: RecipeIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <RecipeIcon {...args} />;
};

export const Recipe = Template.bind({});
