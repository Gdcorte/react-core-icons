import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import HealthIcons from "./Bundle";

export default {
  title: "Bundles/Health",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <HealthIcons.Healthy />
      </SvgBox>
      <SvgBox>
        <HealthIcons.HeartRate />
      </SvgBox>
    </>
  );
};

export const Health = Template.bind({});
