import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import SeedlingIcon from "./Seedling";

export default {
  title: "Nature/Seedling",
  component: SeedlingIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <SeedlingIcon {...args} />;
};

export const Seedling = Template.bind({});
