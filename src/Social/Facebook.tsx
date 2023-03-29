import styled from "styled-components";
import { BaseSvg } from "../Base";
import { IconComponent } from "../Base/interface";

const StyledBaseSvg = styled(BaseSvg)`
  .social-facebook-blue {
    fill: #3b5998;
  }
`;

const Facebook: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/facebook-color-icon/

  return (
    <StyledBaseSvg
      iconName="social-facebook"
      className={className}
      viewBox="0 0 333333 333333"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      {...props}
    >
      <path
        className="social-facebook-blue"
        d="M197917 62502h52080V0h-52080c-40201 0-72909 32709-72909 72909v31250H83337v62507h41659v166667h62506V166666h52080l10415-62506h-62496V72910c0-5648 4768-10415 10415-10415v6z"
      />
    </StyledBaseSvg>
  );
};

export default Facebook;
