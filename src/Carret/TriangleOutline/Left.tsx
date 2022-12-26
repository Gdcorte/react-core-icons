import { BaseSvg } from "../../Base";
import { IconComponent } from "../../Base/interface";

const Left: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/caret-left-outline-icon/

  return (
    <BaseSvg
      iconName="carret-triangle-outline-left"
      className={className}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 352 512.54"
      {...props}
    >
      <path
        fill-rule="nonzero"
        d="m351.9 61.17.01 390.15h.09c0 16.43-6.19 30.5-15.88 41.07v.09c-5.81 6.33-12.96 11.35-20.79 14.78-7.87 3.44-16.37 5.28-24.87 5.28-14.35 0-28.95-5.02-41.08-16.14L22.1 301.64c-2.57-2.08-4.9-4.34-6.99-6.71l-1.31-1.64C4.72 282.25.14 268.75 0 255.23c-.13-14.13 4.57-28.3 14.03-39.75 1.87-2.26 4.13-4.58 6.77-6.91l229.84-193.5-.06-.07C262.47 4.65 276.51.02 290.33 0c8.95 0 17.73 1.98 25.68 5.63 8.08 3.7 15.33 9.02 21.09 15.64 9.06 10.41 14.78 24.11 14.8 39.9zm-44.62 390.15-.01-390.15c0-4.1-1.54-7.72-3.95-10.49-1.69-1.94-3.7-3.46-5.86-4.44-2.26-1.04-4.71-1.61-7.13-1.61-3.42 0-7.06 1.29-10.35 4.16l-.06-.08C205.45 113.53 122.6 175.9 50.38 242c-.51.45-1.15 1.15-1.87 2.02-2.6 3.15-3.91 7.03-3.87 10.86.03 3.4 1.13 6.81 3.3 9.63l.78.84c.57.65 1.21 1.27 1.89 1.83 60.3 61.53 160.58 137.54 229.06 196.31 3.18 2.92 7.02 4.24 10.79 4.24 2.49 0 4.88-.5 7.01-1.43 2.14-.93 4.12-2.33 5.75-4.1l.04.04c2.4-2.64 3.93-6.36 3.93-10.92h.09z"
      />
    </BaseSvg>
  );
};

export default Left;