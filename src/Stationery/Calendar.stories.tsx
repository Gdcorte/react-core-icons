import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import CalendarIcon from "./Calendar";

export default {
  title: "Stationery/Calendar",
  component: CalendarIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <CalendarIcon {...args} />;
};

export const Calendar = Template.bind({});
