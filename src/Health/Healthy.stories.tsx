import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import HealthyIcon from "./Healthy";

export default {
  title: "Health/Healthy",
  component: HealthyIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <HealthyIcon {...args} />;
};

export const Healthy = Template.bind({});
