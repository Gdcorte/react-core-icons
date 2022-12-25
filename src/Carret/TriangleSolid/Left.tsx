import { BaseSvg } from "../../Base";
import { IconComponent } from "../../Base/interface";

const Left: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/caret-left-icon/

  return (
    <BaseSvg
      iconName="carret-triangle-solid-left"
      className={className}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 336 511.45"
      {...props}
    >
      <path
        fillRule="nonzero"
        d="m335.99 42.42.01 426.57c0 23.45-19.02 42.46-42.46 42.46-11.06 0-21.12-4.22-28.68-11.15L15.37 293.87c-18.04-14.92-20.56-41.66-5.64-59.7 1.49-1.8 3.12-3.46 4.82-4.96L265.69 10.42c17.66-15.38 44.47-13.51 59.85 4.15 7 8.04 10.43 17.96 10.45 27.85z"
      />
    </BaseSvg>
  );
};

export default Left;
