import { FunctionComponent, HTMLAttributes } from "react";

export interface IconProps {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
  customKey?: string;
}

export interface IconComponent extends FunctionComponent<IconProps> {}

export interface SvgBoxComponent extends FunctionComponent<SvgBoxProps> {}

export interface SvgBoxProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  className?: string;
  customKey?: string;
}
