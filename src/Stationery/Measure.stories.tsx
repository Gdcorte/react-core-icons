import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import MeasureIcon from "./Measure";

export default {
  title: "Stationery/Measure",
  component: MeasureIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <MeasureIcon {...args} />;
};

export const Measure = Template.bind({});
