import styled from "styled-components";
import { BaseSvg, IconComponent } from "../Base";

const StyledSvg = styled(BaseSvg)`
  .seedling-leaf {
    fill: #056729;
  }

  .seedling-dirt {
    fill: #5d2f2f;
  }
`;

const Seedling: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/seedling-icon/

  return (
    <StyledSvg
      iconName="nature-seedling"
      viewBox="0 0 122.88 85.97"
      className={className}
      {...props}
    >
      <defs></defs>
      <title>seedling</title>
      <path
        className="seedling-leaf"
        d="M56.6,35l0-.22L90,21.61,59.36,39.17a27.46,27.46,0,0,0,17.76,7.91c13.9.92,26.72-5.27,35.29-16a41.47,41.47,0,0,0,4.27-6.68c1.51-2.88,6.9-12.57,6.12-14.89-1.14-3.38-17-5.71-20.63-6.2C83.31.7,60.27,3.83,55.15,26a10.73,10.73,0,0,0-.22,3.3L53.87,30l-1-.73a8.88,8.88,0,0,0,.27-2.35C52.67,7.79,34.22,1.32,18.26.26,15.19.06,1.73-.7.23,1.89-.81,3.66,2,12.55,2.75,15.18A35.26,35.26,0,0,0,5.14,21.4,34.82,34.82,0,0,0,31.49,40.55a23.12,23.12,0,0,0,16-3.52L25.22,17.41l24,15.65v.17c1.91,6.69,1.58,16.38-.27,24.48L58.56,61c-2-7.5-4.41-18.53-2-26Z"
      />
      <path
        className="seedling-dirt"
        d="M9.93,80.47C7.52,80.58,5.76,84,6.6,86H97.46a12.45,12.45,0,0,0-9.68-7.67C86.6,66.15,74.7,61.8,65.93,66.47c3.29-9.13-3.7-11.06-8.68-9.69-2.5-3.08-12-.63-12.3,4.92-11.73-7.92-22.87-1.35-21.71,9.84-3.95-2.28-13.61-.92-13.31,8.93Z"
      />
    </StyledSvg>
  );
};

export default Seedling;
