import styled from "styled-components";
import { SvgBoxComponent } from "./interface";

const StyledBox = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => width || 100}px;
  height: ${({ height }) => height || 100}px;
`;

const SvgBox: SvgBoxComponent = ({
  className,
  width,
  height,
  children,
  customKey,
  ...props
}) => {
  return (
    <StyledBox
      key={`${customKey} ${Math.random().toFixed(7)}`}
      className={`${className} svg-box`}
      {...props}
    >
      {children}
    </StyledBox>
  );
};

export default SvgBox;
