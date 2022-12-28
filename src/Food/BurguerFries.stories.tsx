import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import BurguerFriesIcon from "./BurguerFries";

export default {
  title: "Food/BurguerFries",
  component: BurguerFriesIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <BurguerFriesIcon {...args} />;
};

export const BurguerFries = Template.bind({});
