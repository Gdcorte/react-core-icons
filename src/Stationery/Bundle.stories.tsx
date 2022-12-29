import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import StationeryIcons from "./Bundle";

export default {
  title: "Bundles/Stationery",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <StationeryIcons.Calendar />
      </SvgBox>
      <SvgBox>
        <StationeryIcons.Measure />
      </SvgBox>
    </>
  );
};

export const Stationery = Template.bind({});
