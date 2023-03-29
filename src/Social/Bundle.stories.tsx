import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import SocialIcons from "./Bundle";

export default {
  title: "Bundles/Social",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <SocialIcons.Facebook />
      </SvgBox>
    </>
  );
};

export const Social = Template.bind({});
