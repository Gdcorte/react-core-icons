import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import OrganizationIcons from "./Bundle";

export default {
  title: "Bundles/Organization",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <OrganizationIcons.Dashboard />
      </SvgBox>
      <SvgBox>
        <OrganizationIcons.Menu />
      </SvgBox>
    </>
  );
};

export const Organization = Template.bind({});
