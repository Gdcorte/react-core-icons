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
  // https://uxwing.com/china-flag-icon/

  return (
    <StyledBaseSvg
      iconName="flag-rectangle-china"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      viewBox="0 0 169.701 127.846"
    >
      <g transform="matrix(3.076995, 0, 0, 3.32481, -0.251953, 0.03599)">
        <path
          className="flag-china-red"
          d="M3.01,0h49.17c1.66,0.01,3.01,1.37,3.01,3.03v32.33c0,1.66-1.35,3.02-3.01,3.03L3,38.4 c-1.65-0.02-3-1.38-3-3.03V3.03C0,1.37,1.35,0.01,3.01,0L3.01,0z"
        />
        <polygon
          className="flag-china-yellow"
          points="8.4,3.84 11.79,14.26 2.92,7.82 13.88,7.82 5.01,14.26 8.4,3.84"
        />
        <polygon
          className="flag-china-yellow"
          points="18.75,2.07 18.43,5.71 16.55,2.58 19.91,4.01 16.35,4.83 18.75,2.07"
        />
        <polygon
          className="flag-china-yellow"
          points="23.22,6.34 21.51,9.57 20.99,5.96 23.54,8.58 19.94,7.95 23.22,6.34"
        />
        <polygon
          className="flag-china-yellow"
          points="23.64,12.78 20.77,15.03 21.77,11.52 23.02,14.95 19.99,12.91 23.64,12.78"
        />
        <polygon
          className="flag-china-yellow"
          points="18.68,15.48 18.51,19.13 16.5,16.08 19.92,17.37 16.4,18.34 18.68,15.48"
        />
      </g>
    </StyledBaseSvg>
  );
};

export default China;
