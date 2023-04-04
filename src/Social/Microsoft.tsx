import styled from "styled-components";
import { BaseSvg } from "../Base";
import { IconComponent } from "../Base/interface";

const StyledBaseSvg = styled(BaseSvg)`
  .social-microsoft-orange {
    fill: #f25022;
  }
  .social-microsoft-green {
    fill: #7fba00;
  }
  .social-microsoft-blue {
    fill: #00a4ef;
  }
  .social-microsoft-yellow {
    fill: #ffb900;
  }
`;

const Microsoft: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/microsoft-icon/

  return (
    <StyledBaseSvg
      iconName="social-microsoft"
      className={className}
      viewBox="0 0 129 129"
      {...props}
    >
      <path className="social-microsoft-orange" d="M0,0h61.3v61.3H0V0z" />
      <path className="social-microsoft-green" d="M67.7,0H129v61.3H67.7V0z" />
      <path className="social-microsoft-blue" d="M0,67.7h61.3V129H0V67.7z" />
      <path
        className="social-microsoft-yellow"
        d="M67.7,67.7H129V129H67.7V67.7z"
      />
    </StyledBaseSvg>
  );
};

export default Microsoft;
