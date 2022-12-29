import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BoxedMultipleDecorator } from "../.storybook/";
import SvgBox from "../Base/Box";
import { IconComponent } from "../Base/interface";
import SymbolsIcons from "./Bundle";

export default {
  title: "Bundles/Symbols",
  decorators: [BoxedMultipleDecorator],
} as ComponentMeta<IconComponent>;

const Template: ComponentStory<IconComponent> = (args) => {
  return (
    <>
      <SvgBox>
        <SymbolsIcons.Add />
      </SvgBox>
      <SvgBox>
        <SymbolsIcons.Infinite />
      </SvgBox>
      <SvgBox>
        <SymbolsIcons.Question />
      </SvgBox>
      <SvgBox>
        <SymbolsIcons.Refresh />
      </SvgBox>
      <SvgBox>
        <SymbolsIcons.Replace />
      </SvgBox>
      <SvgBox>
        <SymbolsIcons.User />
      </SvgBox>
      <SvgBox>
        <SymbolsIcons.X />
      </SvgBox>
    </>
  );
};

export const Symbols = Template.bind({});
