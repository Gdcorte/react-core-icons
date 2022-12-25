import { BaseSvg } from "../../Base";
import { IconComponent } from "../../Base/interface";

const Right: IconComponent = ({ className, ...props }) => {
  //  https://uxwing.com/caret-right-outline-icon/

  return (
    <BaseSvg
      iconName="carret-triangle-outline-right"
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
        fillRule="nonzero"
        d="M.1 451.38.09 61.22H0c0-16.42 6.19-30.5 15.88-41.06v-.09c5.81-6.34 12.96-11.36 20.79-14.79C44.54 1.85 53.04 0 61.54 0c14.35 0 28.95 5.03 41.08 16.15L329.9 210.9c2.57 2.08 4.9 4.34 6.99 6.71l1.31 1.64c9.08 11.05 13.66 24.54 13.8 38.06.13 14.14-4.57 28.3-14.03 39.75-1.87 2.27-4.13 4.58-6.77 6.92L101.36 497.47l.06.07c-11.89 10.36-25.93 14.99-39.75 15-8.95.01-17.73-1.98-25.68-5.62-8.08-3.7-15.33-9.03-21.09-15.65C5.84 480.86.12 467.16.1 451.38zM44.72 61.22l.01 390.16c0 4.09 1.54 7.71 3.95 10.49 1.69 1.93 3.7 3.45 5.86 4.44 2.26 1.03 4.71 1.6 7.13 1.6 3.42 0 7.06-1.29 10.35-4.15l.06.07c74.47-64.81 157.32-127.19 229.54-193.29.51-.45 1.15-1.14 1.87-2.01 2.6-3.16 3.91-7.04 3.87-10.87-.03-3.4-1.13-6.8-3.3-9.63l-.78-.83a16.45 16.45 0 0 0-1.89-1.84c-60.3-61.53-160.58-137.54-229.06-196.31-3.18-2.92-7.02-4.24-10.79-4.24-2.49 0-4.88.51-7.01 1.43-2.14.94-4.12 2.34-5.75 4.11l-.04-.05c-2.4 2.65-3.93 6.36-3.93 10.92h-.09z"
      />
    </BaseSvg>
  );
};

export default Right;
