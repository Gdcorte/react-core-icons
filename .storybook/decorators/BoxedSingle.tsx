import { ComponentStory } from "@storybook/react";
import React from "react";
import { BaseSvgBox } from "../../src/Base";

const BoxedTemplate = (StoryComponent: ComponentStory<any>) => {
  return (
    <BaseSvgBox>
      <StoryComponent />
    </BaseSvgBox>
  );
};

export default BoxedTemplate;
