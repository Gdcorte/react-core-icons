import styled from "styled-components";
import { BaseSvg, IconComponent } from "../../Base";

const StyledBaseSvg = styled(BaseSvg)`
  .flag-japan-red {
    fill: #bf141c;
  }

  .flag-japan-white {
    fill: #efefef;
  }
`;

const Japan: IconComponent = ({ ...props }) => {
  // https://uxwing.com/japan-flag-round-circle-icon/

  return (
    <StyledBaseSvg
      iconName="flag-round-japan"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="19.648 19.364 472.789 472.834"
    >
      <g fillRule="nonzero">
        <path
          className="flag-japan-white"
          d="M256.01 19.48c65.29 0 124.45 26.48 167.24 69.27l1.1 1.18c42.14 42.72 68.17 101.37 68.17 166.07 0 65.3-26.49 124.45-69.28 167.24l-1.19 1.1c-42.73 42.15-101.4 68.19-166.04 68.19-65.31 0-124.46-26.5-167.25-69.29C45.97 380.45 19.47 321.29 19.47 256c0-65.24 26.51-124.38 69.34-167.19 42.74-42.84 101.89-69.33 167.2-69.33z"
        />
        <path
          className="flag-japan-red"
          d="M363.03 254.92c0-59.09-47.91-106.99-106.99-106.99-59.09 0-106.99 47.9-106.99 106.99 0 59.08 47.9 106.99 106.99 106.99 59.08 0 106.99-47.91 106.99-106.99z"
        />
      </g>
    </StyledBaseSvg>
  );
};

export default Japan;
