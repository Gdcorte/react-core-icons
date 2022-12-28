import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import DashboardIcon from "./Dashboard";

export default {
  title: "Organization/Dashboard",
  component: DashboardIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <DashboardIcon {...args} />;
};

export const Dashboard = Template.bind({});
