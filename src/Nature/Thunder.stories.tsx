import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import ThunderIcon from "./Thunder";

export default {
  title: "Nature/Thunder",
  component: ThunderIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <ThunderIcon {...args} />;
};

export const Thunder = Template.bind({});
