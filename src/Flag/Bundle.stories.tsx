import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Flags as Flag } from ".";
import { BoxedMultipleDecorator } from "../../.storybook/decorators";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";

export default {
  title: "Bundles/Flags",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

type Countries = "Brazil" | "China" | "Japan" | "UnitedStates";

const Template: ComponentStory<IconComponent> = (args) => {
  function makeFlagBundle(Bundle: { [key in Countries]: IconComponent }) {
    return (
      <>
        <SvgBox>
          <Bundle.Brazil {...args} />
        </SvgBox>
        <SvgBox>
          <Bundle.China {...args} />
        </SvgBox>
        <SvgBox>
          <Bundle.Japan {...args} />
        </SvgBox>
        <SvgBox>
          <Bundle.UnitedStates {...args} />
        </SvgBox>
      </>
    );
  }
  return (
    <>
      {makeFlagBundle(Flag.Round)}
      {makeFlagBundle(Flag.Rectangle)}
    </>
  );
};

export const Flags = Template.bind({});
