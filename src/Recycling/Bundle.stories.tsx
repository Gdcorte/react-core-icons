import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import RecyclingIcons from "./Bundle";

export default {
  title: "Bundles/Recycling",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <RecyclingIcons.Other />
      </SvgBox>
    </>
  );
};

export const Recycling = Template.bind({});
