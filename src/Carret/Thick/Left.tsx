import { BaseSvg } from "../../Base";
import { IconComponent } from "../../Base/interface";

const Left: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/left-angle-arrow-bold-icon/
  return (
    <BaseSvg
      iconName="carret-thick-left"
      className={className}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 346 511.48"
      {...props}
    >
      <path
        fillRule="nonzero"
        d="M346 101.8 201.49 255.74 346 409.68l-105.94 101.8L0 255.74 240.06 0z"
      />
    </BaseSvg>
  );
};

export default Left;
