import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import Carret from "./Bundle";

export default {
  title: "Bundles/Carrets",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  function buildCarretTypes(CarretBundle: {
    Up: IconComponent;
    Down: IconComponent;
    Left: IconComponent;
    Right: IconComponent;
  }) {
    return (
      <>
        <SvgBox>
          <CarretBundle.Up {...args} />
        </SvgBox>
        <SvgBox>
          <CarretBundle.Down {...args} />
        </SvgBox>
        <SvgBox>
          <CarretBundle.Left {...args} />
        </SvgBox>
        <SvgBox>
          <CarretBundle.Right {...args} />
        </SvgBox>
      </>
    );
  }

  return (
    <>
      {buildCarretTypes(Carret.Thick)}
      {buildCarretTypes(Carret.Thin)}
      {buildCarretTypes(Carret.Double)}
      {buildCarretTypes(Carret.Triangle.Solid)}
      {buildCarretTypes(Carret.Triangle.Outline)}
    </>
  );
};

export const Carrets = Template.bind({});
