import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import Food from "./Bundle";

export default {
  title: "Bundles/Foods",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  const FoodItems = Object.keys(Food).map((value) => {
    let key = value as keyof typeof Food;
    const Element = Food[key];
    return (
      <SvgBox key={`food-${Math.random().toFixed(10)}`}>
        <Element />
      </SvgBox>
    );
  });

  return <>{FoodItems}</>;
};

export const Foods = Template.bind({});
