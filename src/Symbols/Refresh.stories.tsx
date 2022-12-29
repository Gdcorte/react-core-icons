import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../.storybook/";
import { IconComponent } from "../Base/interface";
import RefreshIcon from "./Refresh";

export default {
  title: "Symbols/Refresh",
  component: RefreshIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <RefreshIcon {...args} />;
};

export const Refresh = Template.bind({});
