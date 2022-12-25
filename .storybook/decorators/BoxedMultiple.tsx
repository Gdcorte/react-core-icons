import { ComponentStory } from "@storybook/react";
import styled from "styled-components";

const StyledMultiBox = styled.div`
  display: flex;
  flex-wrap: wrap;

  .svg-box {
    margin: 6px;
  }
`;

const BoxedTemplate = (StoryComponent: ComponentStory<any>) => {
  return (
    <StyledMultiBox>
      <StoryComponent />
    </StyledMultiBox>
  );
};

export default BoxedTemplate;
