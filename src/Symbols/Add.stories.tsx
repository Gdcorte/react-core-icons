import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook/decorators";
import { IconComponent } from "../Base/interface";
import AddIcon from "./Add";

export default {
  title: "Symbols/Add",
  component: AddIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <AddIcon {...args} />;
};

export const Add = Template.bind({});
