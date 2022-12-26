import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import TorsoIcon from "./TorsoFemale";

export default {
  title: "Anatomy/TorsoFemale",
  component: TorsoIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <TorsoIcon {...args} />;
};

export const TorsoFemale = Template.bind({});
