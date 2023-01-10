import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook";
import { IconComponent } from "../Base/interface";
import PouchIcon from "./Pouch";

export default {
  title: "Organization/Pouch",
  component: PouchIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <PouchIcon {...args} />;
};

export const Pouch = Template.bind({});
