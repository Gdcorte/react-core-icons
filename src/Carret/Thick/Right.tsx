import { BaseSvg } from "../../Base";
import { IconComponent } from "../../Base/interface";

const Right: IconComponent = ({ className, ...props }) => {
  //  https://uxwing.com/right-angle-arrow-bold-icon/
  return (
    <BaseSvg
      iconName="carret-thick-right"
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
        d="m0 409.68 144.51-153.95L0 101.79 105.93 0 346 255.73 105.93 511.48z"
      />
    </BaseSvg>
  );
};

export default Right;
