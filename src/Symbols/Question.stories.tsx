import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import QuestionIcon from "./Question";

export default {
  title: "Symbols/Question",
  component: QuestionIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <QuestionIcon {...args} />;
};

export const Question = Template.bind({});
