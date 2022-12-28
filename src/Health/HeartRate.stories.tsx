import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import HeartRateIcon from "./HeartRate";

export default {
  title: "Health/HeartRate",
  component: HeartRateIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <HeartRateIcon {...args} />;
};

export const HeartRate = Template.bind({});
