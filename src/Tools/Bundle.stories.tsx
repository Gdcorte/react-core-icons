import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Tools as Tool } from ".";
import { BoxedMultipleDecorator } from "../../.storybook/decorators";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";

export default {
  title: "Bundles/Tools",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <Tool.Gears.Single {...args} />
      </SvgBox>
      <SvgBox>
        <Tool.Gears.Double {...args} />
      </SvgBox>
      <SvgBox>
        <Tool.Gears.Triple {...args} />
      </SvgBox>
    </>
  );
};

export const Tools = Template.bind({});
