import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import NatureIcons from "./Bundle";

export default {
  title: "Bundles/Nature",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <NatureIcons.Energy />
      </SvgBox>
      <SvgBox>
        <NatureIcons.Fire />
      </SvgBox>
      <SvgBox>
        <NatureIcons.Seedling />
      </SvgBox>
      <SvgBox>
        <NatureIcons.Thunder />
      </SvgBox>
      <SvgBox>
        <NatureIcons.Water />
      </SvgBox>
    </>
  );
};

export const Nature = Template.bind({});
