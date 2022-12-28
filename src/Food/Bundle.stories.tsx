import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../../.storybook/decorators";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import Food from "./Bundle";

export default {
  title: "Bundles/Foods",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <Food.Beef />
      </SvgBox>
      <SvgBox>
        <Food.Breakfast />
      </SvgBox>
      <SvgBox>
        <Food.BurguerFries />
      </SvgBox>
      <SvgBox>
        <Food.Dish />
      </SvgBox>
      <SvgBox>
        <Food.Recipe />
      </SvgBox>
      <SvgBox>
        <Food.Tomato />
      </SvgBox>
    </>
  );
};

export const Foods = Template.bind({});
