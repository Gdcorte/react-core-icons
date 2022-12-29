import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import GymIcons from "./Bundle";

export default {
  title: "Bundles/Gym",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <GymIcons.Dumbbell />
      </SvgBox>
    </>
  );
};

export const Gym = Template.bind({});
