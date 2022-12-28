import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../../.storybook/decorators";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import HouseIcons from "./Bundle";

export default {
  title: "Bundles/House",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <HouseIcons.Bulbs.Light />
      </SvgBox>
      <SvgBox>
        <HouseIcons.Bulbs.Dark />
      </SvgBox>
      <SvgBox>
        <HouseIcons.Bathroom.Scale />
      </SvgBox>
      <SvgBox>
        <HouseIcons.Kitchen.ForkSpoon />
      </SvgBox>
    </>
  );
};

export const House = Template.bind({});
