import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Anatomy as AnatomyIcons } from ".";
import { BoxedMultipleDecorator } from "../../.storybook/decorators";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";

export default {
  title: "Bundles/Anatomy",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <AnatomyIcons.Arm {...args} />
      </SvgBox>
      <SvgBox>
        <AnatomyIcons.Eye {...args} />
      </SvgBox>
      <SvgBox>
        <AnatomyIcons.EyeCrossed {...args} />
      </SvgBox>
      <SvgBox>
        <AnatomyIcons.Fat {...args} />
      </SvgBox>
      <SvgBox>
        <AnatomyIcons.Feet {...args} />
      </SvgBox>
      <SvgBox>
        <AnatomyIcons.Heart {...args} />
      </SvgBox>
      <SvgBox>
        <AnatomyIcons.Leg {...args} />
      </SvgBox>
      <SvgBox>
        <AnatomyIcons.TorsoFemale {...args} />
      </SvgBox>
      <SvgBox>
        <AnatomyIcons.TorsoMale {...args} />
      </SvgBox>
    </>
  );
};

export const Anatomy = Template.bind({});
