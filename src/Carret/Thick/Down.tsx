import { BaseSvg } from "../../Base";
import { IconComponent } from "../../Base/interface";

const Down: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/bottom-angle-arrow-bold-icon/
  return (
    <BaseSvg
      iconName="carret-thick-down"
      className={className}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 346.35"
      {...props}
    >
      <path
        fillRule="nonzero"
        d="M410.1 0 256 144.66 101.9 0 0 106.04l256 240.31 256-240.31z"
      />
    </BaseSvg>
  );
};

export default Down;
