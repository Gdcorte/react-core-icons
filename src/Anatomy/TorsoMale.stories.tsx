import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import TorsoIcon from "./TorsoMale";

export default {
  title: "Anatomy/TorsoMale",
  component: TorsoIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <TorsoIcon {...args} />;
};

export const TorsoMale = Template.bind({});
