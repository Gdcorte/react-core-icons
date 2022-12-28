import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import InfiniteIcon from "./Infinite";

export default {
  title: "Symbols/Infinite",
  component: InfiniteIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <InfiniteIcon {...args} />;
};

export const Infinite = Template.bind({});
