import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import { IconComponent } from "../../Base/interface";
import { default as UnitedStatesIcon } from "./UnitedStates";

export default {
  title: "Flags/Rectangle",
  component: UnitedStatesIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<typeof UnitedStatesIcon> = (args) => {
  return <UnitedStatesIcon {...args} />;
};

export const UnitedStates = Template.bind({});
