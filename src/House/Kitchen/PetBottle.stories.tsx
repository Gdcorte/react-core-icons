import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedDecorator } from "../../.storybook";
import { IconComponent } from "../../Base/interface";
import PetBottleIcon from "./PetBottle";

export default {
  title: "House/Kitchen",
  component: PetBottleIcon,
  decorators: [BoxedDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return <PetBottleIcon {...args} />;
};

export const PetBottle = Template.bind({});
