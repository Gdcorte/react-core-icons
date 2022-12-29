import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import DumbbellIcon from "./Dumbbell";

export default {
  title: "Gym/Dumbbell",
  component: DumbbellIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <DumbbellIcon {...args} />;
};

export const Dumbbell = Template.bind({});
