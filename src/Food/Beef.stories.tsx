import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import BeefIcon from "./Beef";

export default {
  title: "Food/Beef",
  component: BeefIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <BeefIcon {...args} />;
};

export const Beef = Template.bind({});
