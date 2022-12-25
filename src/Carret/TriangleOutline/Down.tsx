import { BaseSvg } from "../../Base";
import { IconComponent } from "../../Base/interface";

const Down: IconComponent = ({ className, ...props }) => {
  // https://uxwing.com/caret-bottom-outline-icon/
  return (
    <BaseSvg
      iconName="carret-triangle-outline-down"
      className={className}
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 351.63"
      {...props}
    >
      <path
        fillRule="nonzero"
        d="M450.9.1 61.16.09V0C44.75 0 30.69 6.18 20.14 15.86h-.09C13.72 21.67 8.7 28.8 5.28 36.63 1.84 44.49 0 52.98 0 61.48 0 75.8 5.02 90.4 16.13 102.51l194.55 227.04c2.08 2.57 4.33 4.89 6.7 6.98l1.64 1.31c11.03 9.07 24.51 13.65 38.02 13.78 14.12.14 28.27-4.56 39.71-14.01 2.26-1.87 4.57-4.12 6.91-6.76l193.28-229.6.07.06c10.35-11.88 14.97-25.9 14.99-39.71 0-8.93-1.98-17.71-5.62-25.65-3.7-8.07-9.01-15.31-15.63-21.07C480.35 5.83 466.67.12 450.9.1zM61.16 44.67l389.74.01c4.09 0 7.71 1.54 10.48 3.95 1.93 1.68 3.45 3.7 4.43 5.85 1.04 2.26 1.6 4.71 1.6 7.12 0 3.42-1.29 7.06-4.15 10.34l.08.06c-64.75 74.4-127.05 157.16-193.08 229.3-.46.51-1.15 1.15-2.02 1.87-3.15 2.6-7.03 3.91-10.85 3.87-3.4-.03-6.8-1.13-9.62-3.3l-.84-.78c-.65-.57-1.26-1.21-1.83-1.89C183.64 240.84 107.71 140.66 49 72.26c-2.91-3.18-4.24-7.02-4.24-10.78 0-2.49.51-4.88 1.43-7.01.94-2.14 2.33-4.12 4.1-5.74l-.04-.04c2.64-2.4 6.35-3.93 10.91-3.93v-.09z"
      />
    </BaseSvg>
  );
};

export default Down;
