import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../../.storybook/decorators";
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
    </>
  );
};

export const Organization = Template.bind({});
