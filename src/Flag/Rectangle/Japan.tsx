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

const Japan: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/japan-flag-icon/

  return (
    <StyledBaseSvg
      iconName="flag-japan"
      className={className}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      viewBox="0 0 169.701 127.846"
      {...props}
    >
      <g transform="matrix(3.046094, 0, 0, 3.287246, 0.108072, 0.160063)">
        <path
          className="flag-japan-white"
          d="M3.28,0.25h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.28 c-1.67,0-3.03-1.37-3.03-3.03V3.28C0.25,1.61,1.61,0.25,3.28,0.25L3.28,0.25z"
        />
        <path
          className="flag-japan-red"
          d="M39.37,19.45c0-6.36-5.16-11.52-11.52-11.52c-6.36,0-11.52,5.16-11.52,11.52c0,6.36,5.16,11.52,11.52,11.52 C34.21,30.97,39.37,25.81,39.37,19.45L39.37,19.45z"
        />
      </g>
    </StyledBaseSvg>
  );
};

export default Japan;
