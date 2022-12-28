import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import TomatoIcon from "./Tomato";

export default {
  title: "Food/Tomato",
  component: TomatoIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <TomatoIcon {...args} />;
};

export const Tomato = Template.bind({});
