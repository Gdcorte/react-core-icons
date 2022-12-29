import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import OtherIcon from "./Other";

export default {
  title: "Recycling/Other",
  component: OtherIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <OtherIcon {...args} />;
};

export const Other = Template.bind({});
