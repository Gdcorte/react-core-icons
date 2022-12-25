import { FunctionComponent, HtmlHTMLAttributes } from "react";
import styled from "styled-components";

export interface BaseSvgProps extends HtmlHTMLAttributes<HTMLOrSVGElement> {
  iconName: string;
  customKey?: string;
  className?: string;
  fillRule?: "evenodd" | "nonzero";
  clipRule?: "evenodd" | "nonzero" | "inherit" | "initial" | "revert" | "unset";
  shapeRendering?: "geometricPrecision";
  textRendering?: "geometricPrecision";
  imageRendering?: "optimizeQuality";
  width?: string;
  height?: string;
  fill?: string;
  viewBox?: string;
}

const StyledSvg = styled.svg`
  width: inherit;
  height: inherit;
`;

const BaseSvg: FunctionComponent<BaseSvgProps> = ({
  className,
  iconName,
  children,
  customKey,
  ...props
}) => {
  return (
    <StyledSvg
      key={`${iconName} ${customKey}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={`${className} icon-${iconName}`}
      {...props}
    >
      {children}
    </StyledSvg>
  );
};

export default BaseSvg;
