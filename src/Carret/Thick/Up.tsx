import { BaseSvg } from "../../Base";
import { IconComponent } from "../../Base/interface";

const Up: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/top-angle-arrow-bold-icon/

  return (
    <BaseSvg
      iconName="carret-thick-up"
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
        d="M410.1 346.35 256 201.69 101.9 346.35 0 240.31 256 0l256 240.31z"
      />
    </BaseSvg>
  );
};

export default Up;
