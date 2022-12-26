import styled from "styled-components";
import { BaseSvg, IconComponent } from "../../Base";

const StyledBaseSvg = styled(BaseSvg)`
  .flag-china-red {
    fill: #bf141c;
  }

  .flag-china-yellow {
    fill: #ff0;
  }
`;

const China: IconComponent = ({ ...props }) => {
  // https://uxwing.com/china-flagRound-circle-icon/

  return (
    <StyledBaseSvg
      iconName="flag-round-china"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="39.553 39.433 432.978 432.754"
    >
      <g fillRule="nonzero">
        <path
          className="flag-china-red"
          d="M256 39.59c119.52 0 216.41 96.89 216.41 216.4 0 119.52-96.89 216.42-216.41 216.42-119.51 0-216.41-96.9-216.41-216.42 0-119.51 96.9-216.4 216.41-216.4z"
        />
        <path
          className="flag-china-yellow"
          d="m156.3 97.57 44.4 136.68-116.27-84.47h143.7l-116.25 84.47L156.3 97.57zm134.8 152.74-2.23 47.84-26.33-40 44.82 16.88-46.19 12.67 29.93-37.39zm65.15-35.44-37.72 29.52 13.16-46.06 16.4 44.99-39.73-26.74 47.89-1.71zm-5.59-84.44-22.38 42.34-6.79-47.43 33.33 34.37-47.17-8.2 43.01-21.08zM292.08 74.4l-4.23 47.71-24.64-41.06L307.3 99.8l-46.69 10.74 31.47-36.14z"
        />
      </g>
    </StyledBaseSvg>
  );
};

export default China;
